package br.com.danilo.seniorchallenge.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClienteDTO {

    private long id;
    private String nome;
    private String cpf;
    private String telefone;

    public static ClienteDTO converter(Cliente p){
        var cliente = new ClienteDTO();
        cliente.setId(p.getId());
        cliente.setNome(p.getNome());
        cliente.setCpf(p.getCpf());
        cliente.setTelefone(p.getTelefone());
        return cliente;
    }
}
