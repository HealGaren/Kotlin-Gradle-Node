package server

import js.Require.debug
import js.Require.http
import js.process

/**
 * Created by cyc1007 on 2017-12-14.
 */


class WWW(private val port: Int = 3141) {

    private val application = Application()

    fun startServer() {
        val server = http.createServer(application.app);

        server.listen(port);

        server.on("error"){ error ->
            onError(error)
        }

        server.on("listening") {
            debug("Listening on port $port")
        }
    }

    private fun onError(error: dynamic) {
        if (error.syscall !== "listen") {
            throw Error(error.toString())
        }

        // handle specific listen errors with friendly messages
        when (error.code) {
            "EACCES" -> {
                console.error("port $port requires elevated privileges")
                process.exit(1)
            }
            "EADDRINUSE" -> {
                console.error("port $port is already in use")
                process.exit(1)
            }
            else -> throw Error(error.toString())
        }
    }
}


