/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.i3akef.genesis.webservice;


import java.io.File;
import java.util.ArrayList;
import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import javax.jws.soap.SOAPBinding.Style;




/**
 *
 * @author islam
 */


//Service Endpoint Interface
@WebService
@SOAPBinding(style = Style.RPC)
public interface GenesisServiceInterface {
    @WebMethod String runGenesis(String code);
}
