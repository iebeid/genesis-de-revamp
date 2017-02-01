/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.i3akef.genesis.webservice;
import javax.xml.ws.Endpoint;
import com.i3akef.genesis.webservice.GenesisServiceImpl;
/**
 *
 * @author islam
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        GenesisServiceImpl genesis_run_object = new GenesisServiceImpl();
        String code = "anything";
        genesis_run_object.runGenesis(code);
        Endpoint.publish("http://localhost:9999/ws/genesis", new GenesisServiceImpl());
    }
    
}