define ['common','jquery','sheek'],(common,$,sheek) -> {
        test:(word)->
            leek =  jsRoutes.controllers.Application
            $("#leek").text "leek "+word
            return "leek " +word
        jsRoutesTest:()->
            leek = jsRoutes.controllers.Application.leek();
            $("#leek").text leek

    }
