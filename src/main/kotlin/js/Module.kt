package js

/**
 * Created by cyc1007 on 2017-12-14.
 */

object Require {

    val express: dynamic = require("express")
    val debug: dynamic = require("debug")("express-default:server")
    val http: dynamic = require("http")
    val path: dynamic = require("path")
    val logger: dynamic = require("morgan")
    val cookieParser: dynamic = require("cookie-parser")
    val bodyParser: dynamic = require("body-parser")

}