/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.i3akef.genesis.webservice;
import javax.jws.WebService;
import com.i3akef.genesis.runtime.GenesisInterpreter;
import java.io.File;
import java.util.ArrayList;
import java.util.List;
/**
 *
 * @author islam
 */
//Service Implementation
@WebService(endpointInterface = "com.i3akef.genesis.webservice.GenesisServiceInterface")
public class GenesisServiceImpl implements GenesisServiceInterface{

    @Override
    public String runGenesis(String code) {
        System.out.println("Hello Genesis");
        List<String> argsList = new ArrayList<>();
        argsList.add("-d");
        File file = new File("D:\\Projects\\ArkansasTechUniversity\\Thesis\\Sources\\NetbeansProjects\\GenesisWebService\\data\\algorithm2.txt");
        argsList.add(file.getAbsolutePath());
        String[] arguments = new String[argsList.size()];
        for(int i = 0 ; i < arguments.length ; i++){
            arguments[i] = argsList.get(i);
        }
        GenesisInterpreter.callGenesis(arguments);
        return code;
    }
    
}
