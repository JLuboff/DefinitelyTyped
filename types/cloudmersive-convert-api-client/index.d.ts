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
    compareDocumentDocx: any;
}