package server

import js.Require.express
import js.Require.path
import js.__dirname
import js.Require.bodyParser
import js.Require.cookieParser
import kotlin.js.json

/**
 * Created by cyc1007 on 2017-12-14.
 */



class Application {


    val app: dynamic = express()


    init {

        app.set("views", path.join(__dirname, "views"))
        app.set("view engine", "jade")

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded(json("extended" to false)))
        app.use(cookieParser())
        app.use(express.static(path.join(__dirname, "public")));

        app.get("/"){ _, res, _ ->
                res.render("index", json("title" to "Express"))
        }
        app.get("/users"){ _, res, _ ->
            res.send("respond with a resource")
        }

        app.use { _, _, next ->
            next(
                    json(
                        "message" to "not found",
                        "code" to 404
                    )
            )
        }

        app.use { err, req, res, _ ->
            res.locals.message = err.message;
            res.locals.error =
                    if (req.app.get("env") === "development") err
                    else json()

            res.status(err.status ?: 500);
            res.render("error");
        }
    }
}