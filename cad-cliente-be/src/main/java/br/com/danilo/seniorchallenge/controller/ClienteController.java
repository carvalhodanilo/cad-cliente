package br.com.danilo.seniorchallenge.controller;


import br.com.danilo.seniorchallenge.model.Cliente;
import br.com.danilo.seniorchallenge.model.ClienteDTO;
import br.com.danilo.seniorchallenge.service.ClienteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class ClienteController {

    @Autowired
    ClienteService clienteService;

    @GetMapping("/clientes")
    public ResponseEntity<Page<ClienteDTO>> getByFilterAndPage(Pageable page,
                                                               @RequestParam(required = false) Optional<String> nome,
                                                               @RequestParam(required = false) Optional<String> cpf) {
        try {
            var p = nome.isPresent() ? nome.get() : "";
            var p2 = cpf.isPresent() ? cpf.get() : "";

            var clientes = clienteService
                    .getByFilterAndPage(nome.isPresent() ? nome.get() : "",
                                        cpf.isPresent() ? cpf.get() : "",
                                        page);

            var clientesDTO  = new PageImpl<>(clientes
                    .stream()
                    .map(person -> ClienteDTO.converter(person))
                    .collect(Collectors.toList()), page, clientes.getTotalElements());

            if (clientes.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }

            return new ResponseEntity<>(clientesDTO, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/clientes")
    public ResponseEntity<ClienteDTO> createCliente(@RequestBody Cliente cliente) {
        try {
            var p = new Cliente();
            p.setNome(cliente.getNome());
            p.setCpf(cliente.getCpf());
            p.setTelefone(cliente.getTelefone());

            clienteService.saveAndFlush(p);
            return new ResponseEntity<>(ClienteDTO.converter(p), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/clientes/{id}")
    public ResponseEntity<ClienteDTO> getClienteById(@PathVariable("id") Long id) {
        Optional<Cliente> dadosCliente = clienteService.findById(id);

        if (dadosCliente.isPresent()) {
            return new ResponseEntity<>(ClienteDTO.converter(dadosCliente.get()), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/clientes/{id}")
    public ResponseEntity<ClienteDTO> updateCliente(@PathVariable("id") Long id, @RequestBody Cliente cliente) {
        Optional<Cliente> dadosCliente = clienteService.findById(id);

        if (dadosCliente.isPresent()) {
            Cliente p = dadosCliente.get();
            p.setNome(cliente.getNome());
            p.setCpf(cliente.getCpf());
            p.setTelefone(cliente.getTelefone());

            return new ResponseEntity<>(ClienteDTO.converter(clienteService.save(p)), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/clientes/{id}")
    public ResponseEntity<HttpStatus> deleteCliente(@PathVariable("id") long id) {
        try {
            clienteService.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
