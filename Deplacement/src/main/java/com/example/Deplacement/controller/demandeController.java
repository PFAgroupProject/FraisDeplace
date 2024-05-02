package com.example.Deplacement.controller;
import com.example.Deplacement.Model.Demande;
import com.example.Deplacement.Service.DemandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Demandes")
@CrossOrigin


public class demandeController {
    @Autowired
    private DemandeService demandeService;
    @PostMapping("/Demande")
    public String addDemande(@RequestBody Demande demande) {
        demandeService.SaveDemande(demande);
        return "new Demande was added";
    }
    @GetMapping("/show")
    public List<Demande> getAllDemandes() {
        return demandeService.getAllDemandes();
    }
    @GetMapping("/show/{id}")
    public Demande getDemande(@PathVariable Long id){
        return demandeService.GetDemande(id);
    }
    @DeleteMapping("/Demande/{id}")
    public Demande deleteDemande(@PathVariable Long id){
        return demandeService.DeleteDemande(id);
    }
    @PutMapping("/Demande/{id}")
    public Demande updateDemande(@PathVariable Long id, @RequestBody Demande demande){
        return demandeService.UpdateDemande(demande,id);
    }


}
