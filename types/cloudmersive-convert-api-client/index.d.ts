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
        opts: {
            inputFile2: Buffer;
            inputFile3: Buffer;
            inputFile4: Buffer;
            inputFile5: Buffer;
            inputFile6: Buffer;
            inputFile7: Buffer;
            inputFile8: Buffer;
            inputFile9: Buffer;
            inputFile10: Buffer;
        },
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

export interface ConvertDataJsonToXml {
    (jsonObject: object, callback: (error: any, data: string, response: any) => any): any;
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
     * Return the reuslts of filtering, selecting an XML document with an XPath expression
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
     * Return the reuslts of querying a single XML document with an XQuery expression. Supports XQuery 3.1 and earlier. This API is optimized for a single XML document as input.
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
     * Return the reuslts of querying an XML document with an XQuery expression. Supports XQuery 3.1 and earlier.
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
     * Return the reuslts of editing an XML document by setting the contents of all of the nodes that match an input XPath expression. Supports elements and attributes.
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
     * Return the reuslts of editing an XML document by replacing all of the nodes that match an input XPath expression with a new XML node expression.
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
     * Return the reuslts of editing an XML document by adding an XML node as a child to all of the nodes that match an input XPath expression.
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
     * Return the reuslts of editing an XML document by adding an attribute to all of the nodes that match an input XPath expression.
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
     * Return the reuslts of editing an XML document by removing all of the nodes that match an input XPath expression
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
     * Return the reuslts of editing an XML document by removing all child nodes of the nodes that match an input XPath expression.
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

export const ApiClient: ApiClient;
