package com.example.cadastroaluno.Repositorio;

import com.example.cadastroaluno.Models.AlunosModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AlunosRepositori extends JpaRepository<AlunosModel, Long> {
    public Optional<AlunosModel> findEventByCPF(Long CPF);
    @Query("select s from AlunosModel s where s.Telefone1 is null or s.CPF = 0 ")
    List<AlunosModel> buscarMatriculaPendente();
}