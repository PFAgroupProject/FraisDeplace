package com.example.Deplacement.Service;

import com.example.Deplacement.Model.Demande;
import java.util.List;

public interface DemandeService {
    public Demande SaveDemande(Demande demande);
    public List<Demande> getAllDemandes();
    public Demande GetDemande(Long id);
    public Demande DeleteDemande(Long id);
    public Demande UpdateDemande(Demande demande,Long id);
}
