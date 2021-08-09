package br.com.danilo.seniorchallenge.repository;

import br.com.danilo.seniorchallenge.model.Cliente;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {

    @Query(value = "select c.*\n" +
            "from cliente c\n" +
            "where 1=1\n" +
            "and \n" +
            "(c.nome ilike '%'||:nome||'%')\n" +
            "and \n" +
            "(c.cpf ilike '%' || :cpf || '%')",
            countQuery = "SELECT count(*) \n" +
                    "from cliente c\n" +
                    "where 1=1\n" +
                    "and \n" +
                    "(c.nome ilike '%'||:nome||'%')\n" +
                    "and \n" +
                    "(c.cpf ilike '%' || :cpf || '%')",
            nativeQuery = true
    )
    Page<Cliente> getByFilterAndPage(@Param("nome") String nome, @Param("cpf") String cpf, Pageable page);
}
