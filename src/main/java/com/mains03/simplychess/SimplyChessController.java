package com.mains03.simplychess;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SimplyChessController {
    @GetMapping("/")
    public String drawBoard() {
        return "index.html";
    }
}
