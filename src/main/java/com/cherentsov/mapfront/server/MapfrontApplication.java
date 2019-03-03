package com.cherentsov.mapfront.server;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication

public class MapfrontApplication {
    private static final Log logger = LogFactory.getLog(MapfrontApplication.class);
    public static void main(String[] args) {
        SpringApplication.run(MapfrontApplication.class, args);
        logger.info("Mapfront - Start");
    }

}

