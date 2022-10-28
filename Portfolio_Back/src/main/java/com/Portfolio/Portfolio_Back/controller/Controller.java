package com.Portfolio.Portfolio_Back.controller;

import com.Portfolio.Portfolio_Back.model.Experiencia;
import com.Portfolio.Portfolio_Back.model.Formacion;
import com.Portfolio.Portfolio_Back.model.Habilidades;
import com.Portfolio.Portfolio_Back.model.Perfil;
import com.Portfolio.Portfolio_Back.model.Proyecto;
import com.Portfolio.Portfolio_Back.service.IExperienciaService;
import com.Portfolio.Portfolio_Back.service.IFormacionService;
import com.Portfolio.Portfolio_Back.service.IHabilidadesService;
import com.Portfolio.Portfolio_Back.service.IPerfilService;
import com.Portfolio.Portfolio_Back.service.IProyectoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "https://portfolio-61502.web.app")
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

    /*---------------------------------------------------Formacion----------------------------------------------*/

    @GetMapping("/formacion/ver")
    @ResponseBody
    public List<Formacion> verFormacion() {
        return formServ.verFormacion();
    }

    @GetMapping("/formacion/ver/{id}")
    @ResponseBody
    public Formacion buscarFormacion(@PathVariable Long id) {
        return formServ.buscarFormacion(id);
    }

    @PostMapping("/formacion/crear")
    public void agregarFormacion(@RequestBody Formacion pers) {
        formServ.crearFormacion(pers);
    }

    @PutMapping("/formacion/modificar")
    public void modificarPersona(@RequestBody Formacion pers) {
        formServ.crearFormacion(pers);
    }

    @DeleteMapping("/formacion/borrar/{id}")
    public void borrarPersona(@PathVariable Long id) {
        formServ.borrarFormacion(id);
    }

    /*-----------------------------------------------------Experiencia------------------------------------------*/
    @GetMapping("/experiencia/ver")
    @ResponseBody
    public List<Experiencia> verExperiencia() {
        return expeServ.verExperiencia();
    }

    @GetMapping("/experiencia/ver/{id}")
    @ResponseBody
    public Experiencia buscarExperiencia(@PathVariable Long id) {
        return expeServ.buscarExperiencia(id);
    }

    @PostMapping("/experiencia/crear")
    public void agregarExperiencia(@RequestBody Experiencia pers) {
        expeServ.crearExperiencia(pers);
    }

    @PutMapping("/experiencia/modificar")
    public void modificarExperiencia(@RequestBody Experiencia pers) {
        expeServ.crearExperiencia(pers);
    }

    @DeleteMapping("/experiencia/borrar/{id}")
    public void borrarExperiencia(@PathVariable Long id) {
        expeServ.borrarExperiencia(id);
    }

    /*-----------------------------------------------------Habilidad------------------------------------------*/
    @GetMapping("/habilidad/ver")
    @ResponseBody
    public List<Habilidades> verHabilidad() {
        return habilServ.verHabilidad();
    }

    @GetMapping("/habilidad/ver/{id}")
    @ResponseBody
    public Habilidades buscarHabilidad(@PathVariable Long id) {
        return habilServ.buscarHabilidad(id);
    }

    @PostMapping("/habilidad/crear")
    public void agregarHabilidad(@RequestBody Habilidades pers) {
        habilServ.crearHabilidad(pers);
    }

    @PutMapping("/habilidad/modificar")
    public void modificarHabilidad(@RequestBody Habilidades pers) {
        habilServ.crearHabilidad(pers);
    }

    @DeleteMapping("/habilidad/borrar/{id}")
    public void borrarHabilidad(@PathVariable Long id) {
        habilServ.borrarHabilidad(id);
    }

    /*-----------------------------------------------------Proyecto------------------------------------------*/
    @GetMapping("/proyecto/ver")
    @ResponseBody
    public List<Proyecto> verProyecto() {
        return proyServ.verProyecto();
    }

    @GetMapping("/proyecto/ver/{id}")
    @ResponseBody
    public Proyecto buscarProyecto(@PathVariable Long id) {
        return proyServ.buscarProyecto(id);
    }

    @PostMapping("/proyecto/crear")
    public void agregarProyecto(@RequestBody Proyecto pers) {
        proyServ.crearProyecto(pers);
    }

    @PutMapping("/proyecto/modificar")
    public void modificarProyecto(@RequestBody Proyecto pers) {
        proyServ.crearProyecto(pers);
    }

    @DeleteMapping("/proyecto/borrar/{id}")
    public void borrarProyecto(@PathVariable Long id) {
        proyServ.borrarProyecto(id);
    }

    /*-----------------------------------------------------Pefil------------------------------------------------*/
    @GetMapping("/perfil/ver/{id}")
    @ResponseBody
    public Perfil buscarPerfil(@PathVariable Long id) {
        return perfServ.buscarPerfil(id);
    }

    @PostMapping("/perfil/modificar")
    public void modificarPerfil(@RequestBody Perfil pers) {
        perfServ.crearPerfil(pers);
    }

    @GetMapping("/perfil/ver")
    @ResponseBody
    public List<Perfil> verPerfil() {
        return perfServ.verPerfil();
    }
}
