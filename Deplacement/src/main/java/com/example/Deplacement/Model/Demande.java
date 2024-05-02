package com.example.Deplacement.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.util.Date;

@Entity
public class Demande {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String motif;
    private String ville;
    private String trans;
    private Date dated;
    private Date datef;
    private int frais;

    // JPA requires a no-args constructor
    public Demande() {}

    // Constructor without id, since it's auto-generated
    public Demande(String motif, String trans, String ville, Date dated, Date datef, int frais) {
        this.motif = motif;
        this.trans = trans;
        this.ville = ville;
        this.dated = dated;
        this.datef = datef;
        this.frais = frais;
    }

    // Standard setters and getters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getMotif() { return motif; }
    public void setMotif(String motif) { this.motif = motif; }
    public String getVille() { return ville; }
    public void setVille(String ville) { this.ville = ville; }
    public String getTrans() { return trans; }
    public void setTrans(String trans) { this.trans = trans; }
    public Date getDated() { return dated; }
    public void setDated(Date dated) { this.dated = dated; }
    public Date getDatef() { return datef; }
    public void setDatef(Date datef) { this.datef = datef; }
    public int getFrais() { return frais; }
    public void setFrais(int frais) { this.frais = frais; }
}
