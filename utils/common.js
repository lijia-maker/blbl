/** /common/common.js */
// 导入包
var Parser = require('../lib/dom-parser.js');

/**
 * 加载 xml-dom 对象
 * @param {string} txt 
 * @return 返回一个xml-dom对象
 */
function loadXMLString(txt) {
  //新建DOM解析对象
  var parser = new Parser.DOMParser();
  //基于请求到的 XML数据 来构建DOM对象
  var xmlDoc = parser.parseFromString(txt, "text/xml");

  return xmlDoc;
}

/**
 * 解析node，解析xml辅助函数
 * @param {Element} node
 * @return 节点对象
 */
function node2Obj(node) {
  let obj = {};

  if (node.hasChildNodes()) { // 如果该节点有子节点
    // 获取所有的子节点
    var childNodeList = node.childNodes;
    // 遍历子节点
    for (let i = 0; i < childNodeList.length; i++) {
      if (childNodeList[i].nodeType == 3) { // 子节点类型为文本
        // 获取文本节点的内容
        var content = childNodeList[i].nodeValue;
        // 返回节点内容
        return content;
      } else if (childNodeList[i].nodeType == 1) { // 子节点类型为元素
        if (obj[childNodeList[i].nodeName] != null) { // 表示有重复的节点
          let tmp = obj[childNodeList[i].nodeName];
          if (tmp instanceof Array) {
            tmp.push(node2Obj(childNodeList[i]));
          } else {
            obj[childNodeList[i].nodeName] = [];
            obj[childNodeList[i].nodeName].push(tmp);
            obj[childNodeList[i].nodeName].push(node2Obj(childNodeList[i]));
          }
        } else {
          obj[childNodeList[i].nodeName] = node2Obj(childNodeList[i]);
        }
      }
    }
  } else { // 该节点没有子节点
    return;
  }
  return obj;
}

/**
 * 解析xml字符串
 * @param {string} xmlText 
 * @param {string} baseNodeName 
 */
function xml2Obj(xmlText, baseNodeName) {
  let nodeObj = {};
  // 获取到xml dom对象
  let xmlDoc = loadXMLString(xmlText);
  // 按元素名获取节点
  let baseNode_list = xmlDoc.getElementsByTagName(baseNodeName);
  if (baseNode_list.length > 1) {
    nodeObj[baseNodeName] = [];
    for (var i = 0; i < baseNode_list.length; i++) {
      nodeObj[baseNodeName][i] = node2Obj(baseNode_list[i]);
    }
  } else {
    nodeObj = {};
    nodeObj[baseNodeName] = node2Obj(baseNode_list[0]);
  }
  return nodeObj;
}

exports.xml2Obj = xml2Obj

