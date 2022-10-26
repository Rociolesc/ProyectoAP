package com.Portfolio.Portfolio_Back.controller;

import com.Portfolio.Portfolio_Back.model.Experiencia;
import com.Portfolio.Portfolio_Back.model.Formacion;
import com.Portfolio.Portfolio_Back.model.Habilidades;
import com.Portfolio.Portfolio_Back.model.Imagen;
import com.Portfolio.Portfolio_Back.model.Login;
import com.Portfolio.Portfolio_Back.model.Perfil;
import com.Portfolio.Portfolio_Back.model.Proyecto;
import com.Portfolio.Portfolio_Back.service.IExperienciaService;
import com.Portfolio.Portfolio_Back.service.IFormacionService;
import com.Portfolio.Portfolio_Back.service.IHabilidadesService;
import com.Portfolio.Portfolio_Back.service.IImg;
import com.Portfolio.Portfolio_Back.service.ILoginService;
import com.Portfolio.Portfolio_Back.service.IPerfilService;
import com.Portfolio.Portfolio_Back.service.IProyectoService;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.multipart.MultipartFile;

@RestController
public class Controller {
    @Autowired
    private IFormacionService formServ;
    
    @Autowired
    private IExperienciaService expeServ;
    
    @Autowired
    private IHabilidadesService habilServ;
    
    @Autowired
    private IProyectoService proyServ;
    
    @Autowired
    private IPerfilService perfServ;
    @Autowired
    private IImg imgServ;
    @Autowired
    private ILoginService logServ;
    
    /*---------------------------------------------------Login----------------------------------------------*/
     @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/Login/ver")
    @ResponseBody
    public String  verLogin(){
        return logServ.verLogin().get(0).getUseName();
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/Login/ver/{id}")
    @ResponseBody
    public Login  buscarLogin(@PathVariable Long id){
        return logServ.buscarLogin(id);
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/Login/crear")
    public void crearLogin(@RequestBody Login pers){
        logServ.crearLogin(pers);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/Login/logear")
    public String logear(@RequestBody Login pers){
    String Token ;
        //if(pers.getUseName().equals(logServ.verLogin().get(0).getUseName())&& pers.getPassword().equals(logServ.verLogin().get(0).getPassword())){
        
        //return("jhrbfILURfnhsushgvb5ngs08ut839q0rujfionbtrjkñbdan538utgje9f");
       // }else {
       // Token=null;
    //}
        return "jhrbfILURfnhsushgvb5ngs08ut839q0rujfionbtrjkñbdan538utgje9f";
    }
  
    
    
    /*---------------------------------------------------Formacion----------------------------------------------*/
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/formacion/ver")
    @ResponseBody
    public List<Formacion>  verFormacion(){
        return formServ.verFormacion();
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/formacion/ver/{id}")
    @ResponseBody
    public Formacion  buscarFormacion(@PathVariable Long id){
        return formServ.buscarFormacion(id);
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/formacion/crear")
    public void agregarFormacion (@RequestBody Formacion pers){
        formServ.crearFormacion(pers);
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/formacion/modificar")
    public void modificarPersona (@RequestBody Formacion pers){
        formServ.crearFormacion(pers);
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/formacion/borrar/{id}")
    public void borrarPersona(@PathVariable Long id){
        formServ.borrarFormacion(id);
    }
    
    /*-----------------------------------------------------Experiencia------------------------------------------*/
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/experiencia/ver")
    @ResponseBody
    public List<Experiencia>  verExperiencia(){
        return expeServ.verExperiencia();
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/experiencia/ver/{id}")
    @ResponseBody
    public Experiencia  buscarExperiencia(@PathVariable Long id){
        return expeServ.buscarExperiencia(id);
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/experiencia/crear")
    public void agregarExperiencia (@RequestBody Experiencia pers){
        expeServ.crearExperiencia(pers);
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/experiencia/modificar")
    public void modificarExperiencia (@RequestBody Experiencia pers){
        expeServ.crearExperiencia(pers);
    }
    
    @DeleteMapping("/experiencia/borrar/{id}")@CrossOrigin(origins ="http://localhost:4200")
    public void borrarExperiencia(@PathVariable Long id){
        expeServ.borrarExperiencia(id);
    }
    /*-----------------------------------------------------Habilidad------------------------------------------*/
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/habilidad/ver")
    @ResponseBody
    public List<Habilidades>  verHabilidad(){
        return habilServ.verHabilidad();
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/habilidad/ver/{id}")
    @ResponseBody
    public Habilidades  buscarHabilidad(@PathVariable Long id){
        return habilServ.buscarHabilidad(id);
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/habilidad/crear")
    public void agregarHabilidad(@RequestBody Habilidades pers){
        habilServ.crearHabilidad(pers);
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/habilidad/modificar")
    public void modificarHabilidad (@RequestBody Habilidades pers){
        habilServ.crearHabilidad(pers);
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/habilidad/borrar/{id}")
    public void borrarHabilidad(@PathVariable Long id){
        habilServ.borrarHabilidad(id);
    }
    /*-----------------------------------------------------Proyecto------------------------------------------*/
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/proyecto/ver")
    @ResponseBody
    public List<Proyecto>  verProyecto(){
        return proyServ.verProyecto();
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/proyecto/ver/{id}")
    @ResponseBody
    public Proyecto  buscarProyecto(@PathVariable Long id){
        return proyServ.buscarProyecto(id);
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/proyecto/crear")
    public void agregarProyecto(@RequestBody Proyecto pers){
        proyServ.crearProyecto(pers);
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/proyecto/modificar")
    public void modificarProyecto (@RequestBody Proyecto pers){
        proyServ.crearProyecto(pers);
    }
    
    
    @DeleteMapping("/proyecto/borrar/{id}")@CrossOrigin(origins = "http://localhost:4200")
    public void borrarProyecto(@PathVariable Long id){
        proyServ.borrarProyecto(id);
    }
    
    /*-----------------------------------------------------Pefil------------------------------------------------*/
       
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/perfil/ver/{id}")
    @ResponseBody
    public Perfil  buscarPerfil(@PathVariable Long id){
        return perfServ.buscarPerfil(id);
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/perfil/modificar")
    public void modificarPerfil (@RequestBody Perfil pers){
        perfServ.crearPerfil(pers);
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/perfil/ver")
    @ResponseBody
    public List<Perfil>  verPerfil(){
        return perfServ.verPerfil();
    }
    
    
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/perfil/imagen")
    public void handleFileUpload(@RequestParam("file") MultipartFile imagen, Imagen img){
        
        if(!imagen.isEmpty()){
        Path directorioImagenes = Paths.get("src//main//resources//images");
        String rutaAbsoluta = directorioImagenes.toFile().getAbsolutePath();
        
            try {
                byte[] bytesImg = imagen.getBytes();
                Path rutaCompleta = Paths.get(rutaAbsoluta + "//" + imagen.getOriginalFilename());
                Files.write(rutaCompleta, bytesImg);
                
               img.setImg(imagen.getOriginalFilename());
               img.setNamImg(rutaAbsoluta);
               img.setId(1);
            } catch (IOException ex) {
                ex.printStackTrace();
            }
        
        
        }
       imgServ.crearImagen(img);
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/perfil/verImagen")
    @ResponseBody
    public List<Imagen>  verImagenPerfil(){
        return imgServ.verImagen();
    }
    
     
   /*-----------------------------------------------------imagen------------------------------------------------*/
  
             
    
}
