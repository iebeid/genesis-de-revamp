//
// Definitions for service: {http://webservice.genesis.i3akef.com/}GenesisServiceImplService
//

// Javascript for {http://webservice.genesis.i3akef.com/}GenesisServiceInterface

function webservice_genesis_i3akef_com__GenesisServiceInterface () {
    this.jsutils = new CxfApacheOrgUtil();
    this.jsutils.interfaceObject = this;
    this.synchronous = false;
    this.url = null;
    this.client = null;
    this.response = null;
    this.globalElementSerializers = [];
    this.globalElementDeserializers = [];
}

function webservice_genesis_i3akef_com__runGenesis_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling webservice_genesis_i3akef_com__runGenesisResponse_deserializeResponse');
     responseObject = webservice_genesis_i3akef_com__runGenesisResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

webservice_genesis_i3akef_com__GenesisServiceInterface.prototype.runGenesis_onsuccess = webservice_genesis_i3akef_com__runGenesis_op_onsuccess;

function webservice_genesis_i3akef_com__runGenesis_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
     } else {
      client.user_onerror(httpStatus, httpStatusText);
     }
    }
}

webservice_genesis_i3akef_com__GenesisServiceInterface.prototype.runGenesis_onerror = webservice_genesis_i3akef_com__runGenesis_op_onerror;

//
// Operation {http://webservice.genesis.i3akef.com/}runGenesis
// - bare operation. Parameters:
// - type {http://www.w3.org/2001/XMLSchema}string
//
function webservice_genesis_i3akef_com__runGenesis_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.runGenesis_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.runGenesis_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.runGenesis_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

webservice_genesis_i3akef_com__GenesisServiceInterface.prototype.runGenesis = webservice_genesis_i3akef_com__runGenesis_op;

function webservice_genesis_i3akef_com__runGenesis_serializeInput(cxfjsutils, args) {
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://webservice.genesis.i3akef.com/' ");
    xml = xml + '<jns0:runGenesis>';
    // block for local variables
    {
     xml = xml + '<arg0>';
     xml = xml + cxfjsutils.escapeXmlEntities(args[0]);
     xml = xml + '</arg0>';
    }
    xml = xml + '</jns0:runGenesis>';
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

webservice_genesis_i3akef_com__GenesisServiceInterface.prototype.runGenesis_serializeInput = webservice_genesis_i3akef_com__runGenesis_serializeInput;

function webservice_genesis_i3akef_com__runGenesisResponse_deserializeResponse(cxfjsutils, partElement) {
    cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
    partElement = cxfjsutils.getFirstElementChild(partElement);
    cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
    var returnText = cxfjsutils.getNodeText(partElement);
    var returnObject = returnText;
    return returnObject;
}
function webservice_genesis_i3akef_com__GenesisServiceInterface_webservice_genesis_i3akef_com__GenesisServiceImplPort () {
  this.url = 'http://localhost:9999/ws/genesis';
}
webservice_genesis_i3akef_com__GenesisServiceInterface_webservice_genesis_i3akef_com__GenesisServiceImplPort.prototype = new webservice_genesis_i3akef_com__GenesisServiceInterface;