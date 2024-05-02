package com.example.Deplacement.Service;

import com.example.Deplacement.Model.Demande;
import com.example.Deplacement.Repository.DemandeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class DemandeServicempl  implements DemandeService {

    @Autowired
    private DemandeRepository demandeRepository;


    @Override
    public Demande SaveDemande(Demande demande) {
        return demandeRepository.save(demande);
    }

    @Override
    public List<Demande> getAllDemandes() {
        return demandeRepository.findAll();
    }



    @Override
    public Demande GetDemande(Long id) {
        return demandeRepository.findById(id).orElse(null);
    }
    @Override
    public Demande DeleteDemande(Long id) {
        demandeRepository.deleteById(id);
        return null;
    }
    @Override
    public Demande UpdateDemande(Demande demande,Long id) {

        return demandeRepository.save(demande);
    }

}


