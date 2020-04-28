// Type definitions for cloudmersive-convert-api-client 2.4
// Project: https://github.com/Cloudmersive/Cloudmersive.APIClient.NodeJS.DocumentAndDataConvert
// Definitions by: Jason Luboff <https://github.com/JLuboff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

import * as http from 'http';

export enum CollectionFormatEnum {
    /**
     * Comma-separated values. Value: <code>csv</code>
     */
    CSV = ',',
    /**
     * Space-separated values. Value: <code>ssv</code>
     */
    SSV = ' ',
    /**
     * Tab-separated values. Value: <code>tsv</code>
     */
    TSV = '\t',
    /**
     * Pipe(|)-separated values. Value: <code>pipes</code>
     */
    PIPES = '|',
    /**
     * Native array. Value: <code>multi</code>
     */
    MULTI = 'multi',
}
export interface ApiInstanceAuthentications {
    type: 'apiKey';
    in: 'header';
    name: 'Apikey';
    apiKey: string;
}
export interface ApiInstance {
    /**
     * @param basePath string - The base URL against which to resolve every API
     * call's (relative) path.
     * default https://api.cloudmersive.com
     */
    basePath: string;
    /**
     * @param authentications object - The authentication methods to be included for all API calls.
     */
    authentications: { Apikey: ApiInstanceAuthentications };
    /**
     * @param defaultHeaders string[] - The default HTTP headers to be included for all API calls.
     * default {}
     */
    defaultHeaders: string[];
    /**
     * @param timeout number - The default HTTP timeout for all API calls.
     * default 60000
     */
    timeout: number;
    /**
     * If set to false an additional timestamp parameter is added to all API GET calls to
     * prevent browser caching
     * @param cache boolean - If set to false an additional timestamp parameter is added to
     * all API GET calls to prevent browser caching
     * default true
     */
    cache: boolean;
    /**
     * @param enableCookies boolean - If set to true, the client will save the cookies
     * from each server response, and return them in the next request.
     * default false
     */
    enableCookies: boolean;
    /**
     * @param agent http.Agent - Used to save and return cookies in a node.js (
     * non-browser) setting, if this.enableCookies is set to true.
     */
    agent: http.Agent;
    /**
     * @param requestAgent null | http.Agent - Allow user to override superagent agent
     */
    requestAgent: null | http.Agent;
}

export interface ApiClient {
    instance: ApiInstance;
    CollectionFormatEnum: CollectionFormatEnum;
    /**
     * Parses an ISO-8601 string representation of a date value.
     * @param str string - The date value as a string.
     * @returns Date - The parsed date object.
     */
    parseDate: { (str: string): Date };
    /**
     * Converts a value to the specified type.
     * @param data string | Object - The data to convert, as a string or object.
     * @param type any - The type to return.
     * Pass a string for simple types or the constructor function for a complex type. Pass an
     * array containing the type name to return an array of that type. To return an object, pass
     * an object with one property whose name is the key type and whose value is the corresponding
     *  value type: all properties on <code>data<code> will be converted to this type.
     * @returns An instance of the specified type or null or undefined if data is null or undefined.
     */
    convertToType: { (data: string | object, type: any): any };
    /**
     * Constructs a new map or array model from REST data.
     * @param data any - The REST data.
     * @param obj any - The target object or array.
     */
    constructFromObject: { (data: any, obj: any, itemType: any): void };
}

export interface CompareDocumentDocx {
    (inputFile1: Buffer, inputFile2: Buffer, callback: (error: any, data: string, response: any) => any): any;
}
export interface CompareDocumentApi {
    /**
     * Compare two Office Word Documents (docx) files and highlight the differences
     * @param inputFile1
     * buffer
     * @param inputFile2
     * buffer
     * @param callback
     * function
     */
    compareDocumentDocx: CompareDocumentDocx;
}

export class CompareDocumentApi implements CompareDocumentApi {
    constructor(apiClient?: ApiClient);
    compareDocumentDocx: CompareDocumentDocx;
}

interface ConvertDataCsvToJsonOptions {
    /**
     * Boolean | Optional; If true, the first row will be used as the labels for the columns;
     * if false, columns will be named Column0, Column1, etc.
     * Default is true.  Set to false if you are not using column headings, or have an irregular column structure.
     */
    columnNamesFromFirstRow: boolean;
}

export interface ConvertDataCsvToJson {
    (
        inputFile: Buffer,
        opts: ConvertDataCsvToJsonOptions | {},
        callback: (error: any, data: object[], response: any) => any,
    ): any;
}

export interface ConvertDataToJson {
    (inputFile: Buffer, callback: (error: any, data: object[], response: any) => any): any;
}

export interface ConvertDataXmlFilterWithXPath {
    (
        xPathExpression: string,
        inputFile: Buffer,
        callback: (
            error: any,
            data: { Successful: boolean; XmlNodes: string[]; ResultCount: number },
            response: any,
        ) => any,
    ): any;
}

export interface XmlQueryWithXQueryResult {
    Successful: boolean;
    ResultingXml: string;
    ErrorMessage: string;
}

export interface ConvertDataXmlQueryWithXQuery {
    (
        inputFile: Buffer,
        xQuery: string,
        callback: (error: any, data: XmlQueryWithXQueryResult, response: any) => any,
    ): any;
}

export interface ConvertDataXmlQueryWithXQueryMulti {
    (
        inputFile: Buffer,
        xQuery: string,
        opts:
            | {
                  inputFile2: Buffer;
                  inputFile3?: Buffer;
                  inputFile4?: Buffer;
                  inputFile5?: Buffer;
                  inputFile6?: Buffer;
                  inputFile7?: Buffer;
                  inputFile8?: Buffer;
                  inputFile9?: Buffer;
                  inputFile10?: Buffer;
              }
            | {},
        callback: (error: any, data: XmlQueryWithXQueryResult, response: any) => any,
    ): any;
}

export interface XmlSetValuesResult {
    Successful: boolean;
    ResultingXmlDocument: string;
    NodesEditedCount: number;
}

export interface ConvertDataXmlEditSetValueWithXPath {
    (
        inputFile: Buffer,
        xPathExpression: string,
        xmlValue: string,
        callback: (error: any, data: XmlSetValuesResult, response: any) => any,
    ): any;
}

export interface ConvertDataXmlEditReplaceWithXPath {
    (
        inputFile: Buffer,
        xPathExpression: string,
        xmlNodeReplacement: string,
        callback: (error: any, data: XmlSetValuesResult, response: any) => any,
    ): any;
}

export interface ConvertDataXmlEditAddChildWithXPath {
    (
        inputFile: Buffer,
        xPathExpression: string,
        xmlNodeToAdd: string,
        callback: (error: any, data: XmlSetValuesResult, response: any) => any,
    ): any;
}

export interface ConvertDataXmlEditAddAttributeWithXPath {
    (
        inputFile: Buffer,
        xPathExpression: string,
        xmlAttributeName: string,
        xmlAttributeValue: string,
        callback: (error: any, data: XmlSetValuesResult, response: any) => any,
    ): any;
}

export interface ConvertDataXmlRemoveWithXPath {
    (
        xPathExpression: string,
        inputFile: Buffer,
        callback: (
            error: any,
            data: Omit<XmlSetValuesResult, 'NodesEditedCount'> & {
                XmlNodesRemoved: string[];
                NodesRemovedCount: number;
            },
            response: any,
        ) => any,
    ): any;
}

export interface ConvertDataXmlEditRemoveAllChildNodesWithXPath {
    (
        inputFile: Buffer,
        xPathExpression: string,
        callback: (error: any, data: XmlSetValuesResult, response: any) => any,
    ): any;
}
interface ConvertDocumentResult {
    Successful: boolean;
    TextResult: string;
}
type BufferReturnCB = (error: any, data: Buffer, response: any) => any;
type TextReturnCB = (error: any, data: ConvertDocumentResult, response: any) => any
export interface ConvertDataJsonToXml {
    (jsonObject: object, callback: BufferReturnCB): any;
}

export interface ConvertDataApi {
    /**
     * Convert a CSV file to a JSON object array
     * @param inputFile
     * buffer
     * @param opts
     * object - optional parameters
     * @param opts.columnNamesFromFirstRow
     * boolean | Optional; If true, the first row will be used as the labels for the columns;
     * if false, columns will be named Column0, Column1, etc.
     * Default is true.  Set to false if you are not using column headings, or have an irregular column structure.
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDataCsvToJson: ConvertDataCsvToJson;
    /**
     * Convert an Excel XLSX file to a JSON object array
     * @param inputFile
     * buffer
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDataXlsxToJson: ConvertDataToJson;
    /**
     * Convert an Excel (97-2003) XLS file to a JSON object array
     * @param inputFile
     * buffer
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDataXlsToJson: ConvertDataToJson;
    /**
     * Convert an XML string or file into JSON
     * @param inputFile
     * buffer
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDataXmlToJson: ConvertDataToJson;
    /**
     * Return the results of filtering, selecting an XML document with an XPath expression
     * @param xPathExpression
     * string
     * @param inputFile
     * Buffer
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDataXmlFilterWithXPath: ConvertDataXmlFilterWithXPath;
    /**
     * Return the results of querying a single XML document with an XQuery expression. Supports XQuery 3.1 and earlier. This API is optimized for a single XML document as input.
     * Provided XML document is automatically loaded as the default context;
     * to access elements in the document, simply refer to them without a document reference, such as bookstore/book.
     * @param inputFile
     * buffer
     * @param xQuery
     * string
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDataXmlQueryWithXQuery: ConvertDataXmlQueryWithXQuery;
    /**
     * Return the results of querying an XML document with an XQuery expression. Supports XQuery 3.1 and earlier.
     * This API is optimized for multiple XML documents as input. You can refer to the contents of a given document by name, for example doc("books.xml") or doc("restaurants.xml")
     * if you included two input files named books.xml and restaurants.xml. If input files contain no file name, they will default to file names input1.xml, input2.xml and so on.
     * @param inputFile
     * buffer
     * @param xQuery
     * string
     * @param opts
     * object
     * @param opts.inputFileX
     * Buffer - Where X is a number between 2-10
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDataXmlQueryWithXQueryMulti: ConvertDataXmlQueryWithXQueryMulti;
    /**
     * Return the results of editing an XML document by setting the contents of all of the nodes that match an input XPath expression. Supports elements and attributes.
     * @param inputFile
     * buffer
     * @param xPathExpression
     * string
     * @param xmlValue
     * string
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDataXmlEditSetValueWithXPath: ConvertDataXmlEditSetValueWithXPath;
    /**
     * Return the results of editing an XML document by replacing all of the nodes that match an input XPath expression with a new XML node expression.
     * @param inputFile
     * buffer
     * @param xPathExpression
     * string
     * @param xmlNodeReplacement
     * string
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDataXmlEditReplaceWithXPath: ConvertDataXmlEditReplaceWithXPath;
    /**
     * Return the results of editing an XML document by adding an XML node as a child to all of the nodes that match an input XPath expression.
     * @param inputFile
     * buffer
     * @param xPathExpression
     * string
     * @param xmlNodeToAdd
     * string
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDataXmlEditAddChildWithXPath: ConvertDataXmlEditAddChildWithXPath;
    /**
     * Return the results of editing an XML document by adding an attribute to all of the nodes that match an input XPath expression.
     * @param inputFile
     * buffer
     * @param xPathExpression
     * string
     * @param xmlAttributeName
     * string
     * @param xmlAttributeValue
     * string
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDataXmlEditAddAttributeWithXPath: ConvertDataXmlEditAddAttributeWithXPath;
    /**
     * Return the results of editing an XML document by removing all of the nodes that match an input XPath expression
     * @param xPathExpression
     * string
     * @param inputFile
     * buffer
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDataXmlRemoveWithXPath: ConvertDataXmlRemoveWithXPath;
    /**
     * Return the results of editing an XML document by removing all child nodes of the nodes that match an input XPath expression.
     * @param inputFile
     * buffer
     * @param xPathExpression
     * string
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDataXmlEditRemoveAllChildNodesWithXPath: ConvertDataXmlEditRemoveAllChildNodesWithXPath;
    /**
     * Convert an XML string or file into JSON
     * @param inputFile
     * buffer
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     *
     * NOTE: In Cloudmersive's documentation, this method is mentioned twice for two different purposes with
     * different return values
     */
    // convertDataXmlToJson: ConvertDataXmlToJson;
    /**
     * Convert a JSON object into XML
     * @param jsonObject
     * object
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDataJsonToXml: ConvertDataJsonToXml;
}

export class ConvertDataApi implements ConvertDataApi {
    constructor(apiClient?: ApiClient);
    convertDataCsvToJson: ConvertDataCsvToJson;
    convertDataXlsxToJson: ConvertDataToJson;
    convertDataXlsToJson: ConvertDataToJson;
    convertDataXmlToJson: ConvertDataToJson;
    convertDataXmlFilterWithXPath: ConvertDataXmlFilterWithXPath;
    convertDataXmlQueryWithXQuery: ConvertDataXmlQueryWithXQuery;
    convertDataXmlQueryWithXQueryMulti: ConvertDataXmlQueryWithXQueryMulti;
    convertDataXmlEditSetValueWithXPath: ConvertDataXmlEditSetValueWithXPath;
    convertDataXmlEditReplaceWithXPath: ConvertDataXmlEditReplaceWithXPath;
    convertDataXmlEditAddChildWithXPath: ConvertDataXmlEditAddChildWithXPath;
    convertDataXmlEditAddAttributeWithXPath: ConvertDataXmlEditAddAttributeWithXPath;
    convertDataXmlRemoveWithXPath: ConvertDataXmlRemoveWithXPath;
    convertDataXmlEditRemoveAllChildNodesWithXPath: ConvertDataXmlEditRemoveAllChildNodesWithXPath;
    convertDataJsonToXml: ConvertDataJsonToXml;
}

export interface ConvertDocument {
    (inputFile: Buffer, callback: BufferReturnCB): any;
}
type TextFormattingMode = 'preserveWhitespace' | 'minimizeWhitespace';
interface ConvertDocumentDocxToTxtOptions {
    textFormattingMode: TextFormattingMode;
}

export interface ConvertDocumentDocxToTxt {
    (
        inputFile: Buffer,
        opts: ConvertDocumentDocxToTxtOptions | {},
        callback: TextReturnCB,
    ): any;
}
export interface ConvertDocumentToTxt {
    (inputFile: Buffer, callback: TextReturnCB): any
}

export interface ConvertDocumentXlsxToCsv {
    (inputFile: Buffer, outputEncoding: 'UTF-8' | 'UTF-32', callback: TextReturnCB): any
}

export interface ConvertDocumentApi {
    /**
     * Convert Office Word Documents (docx) to standard PDF
     * @param inputFile
     * buffer
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDocumentDocxToPdf: ConvertDocument;
    /**
     * Convert Office Word Documents (docx) to text
     * @param inputFile
     * buffer
     * @param opts
     * ConvertDocumentDocxToTxtOptions | {}
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDocumentDocxToTxt: ConvertDocumentDocxToTxt;
    /**
     * Convert Office Word (97-2003 Format) Documents (doc) to standard PDF
     * @param inputFile
     * buffer
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDocumentDocToPdf: ConvertDocument;
    /**
     * Convert/upgrade Office Word (97-2003 Format) Documents (doc) to the modern DOCX format
     * @param inputFile
     * buffer
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDocumentDocToDocx: ConvertDocument;
    /**
     * Convert Office Word DOC (97-03) Document (doc) to text
     * @param inputFile
     * buffer
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDocumentDocToTxt: ConvertDocumentToTxt;
    /**
     * Convert Office PowerPoint Documents (pptx) to standard PDF
     * @param inputFile
     * buffer
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDocumentPptxToPdf: ConvertDocument;
    /**
     * Convert Office PowerPoint Documents (pptx) to standard Text
     * @param inputFile
     * buffer
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDocumentPptxToTxt: ConvertDocumentToTxt;
    /**
     * Convert Office PowerPoint (97-2003) Documents (ppt) to standard PDF
     * @param inputFile
     * buffer
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDocumentPptToPdf: ConvertDocument;
    /**
     * Convert/upgrade Office PowerPoint (97-2003) Documents (ppt) to modern PPTX
     * @param inputFile
     * buffer
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDocumentPptToPptx: ConvertDocument;
    /**
     * Convert Office Excel Workbooks (XLSX) to standard PDF. Converts all worksheets in the workbook to PDF.
     * Supports both XLSX and XLSB Excel file formats.
     * @param inputFile
     * buffer
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDocumentXlsxToPdf: ConvertDocument;
    /**
     * Convert Office Excel Workbooks (XLSX) to standard Text. Converts all worksheets in the workbook to Text.
     * Supports both XLSX and XLSB file formats. When a spreadsheet contains multiple worksheets, will export
     * all of the text from all of the worksheets. If you wish to export the text from only one worksheet,
     * try using the Split XLSX API to split the spreadsheet into multiple worksheet files, and then run XLSX
     * to Text on the individual worksheet file that you need to extract the text from.
     * @param inputFile
     * buffer
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDocumentXlsxToTxt: ConvertDocumentToTxt;
    /**
     * Convert Office Excel (97-2003) Workbooks (xls) to standard PDF. Converts all worksheets in the workbook to PDF.
     * @param inputFile
     * buffer
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDocumentXlsToPdf: ConvertDocument;
    /**
     * Convert/upgrade Office Excel (97-2003) Workbooks (xls) to modern XLSX format.
     * @param inputFile
     * buffer
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDocumentXlsToXlsx: ConvertDocument;
    /**
     * Convert/upgrade Office Excel (97-2003) Workbooks (xls) to standard CSV format.
     * @param inputFile
     * buffer
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDocumentXlsToCsv: ConvertDocument;
    /**
     * Convert CSV file to Office Excel XLSX Workbooks file format.
     * @param inputFile
     * buffer
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDocumentCsvToXlsx: ConvertDocument;
    /**
     * Convert Office Excel Workbooks (XLSX) to standard Comma-Separated Values (CSV) format. Supports both XLSX and XLSB file Excel formats.
     * @param inputFile
     * buffer
     * @param outputEncoding
     * 'UTF-8' | 'UTF-32'
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDocumentXlsxToCsv: ConvertDocumentXlsxToCsv;
    /**
     * Convert standard HTML, with full support for CSS, JavaScript, Images, and other complex behavior to PDF. 
     * To use external files such as images, use an absolute URL to the file.
     * @param inputFile
     * buffer
     * @param callback
     * function - The callback function, accepting three arguments:
     * error, data, response
     */
    convertDocumentHtmlToPdf: ConvertDocument;
}

export class ConvertDocumentApi implements ConvertDocumentApi {
           constructor(apiClient?: ApiClient);
           convertDocumentDocxToPdf: ConvertDocument;
           convertDocumentDocxToTxt: ConvertDocumentDocxToTxt;
           convertDocumentDocToPdf: ConvertDocument;
           convertDocumentDocToDocx: ConvertDocument;
           convertDocumentDocToTxt: ConvertDocumentToTxt;
           convertDocumentPptxToPdf: ConvertDocument;
           convertDocumentPptxToTxt: ConvertDocumentToTxt;
           convertDocumentPptToPdf: ConvertDocument;
           convertDocumentPptToPptx: ConvertDocument;
           convertDocumentXlsxToPdf: ConvertDocument;
           convertDocumentXlsxToTxt: ConvertDocumentToTxt;
           convertDocumentXlsToPdf: ConvertDocument;
           convertDocumentXlsToXlsx: ConvertDocument;
           convertDocumentXlsToCsv: ConvertDocument;
           convertDocumentCsvToXlsx: ConvertDocument;
           convertDocumentXlsxToCsv: ConvertDocumentXlsxToCsv;
           convertDocumentHtmlToPdf: ConvertDocument;
       }

export const ApiClient: ApiClient;
