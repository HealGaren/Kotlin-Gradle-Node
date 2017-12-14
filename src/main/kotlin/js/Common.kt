package js

/**
 * Created by cyc1007 on 2017-12-14.
 */
external fun require(module:String): dynamic
external val process: dynamic
external val __dirname: String
external class Error {
    val status: Int
}