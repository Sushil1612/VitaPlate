package com.cdac.vitaplate.serviceImpl;


import com.cdac.vitaplate.entities.Tiffin;
import com.cdac.vitaplate.repositories.TiffinRepository;
import com.cdac.vitaplate.services.TiffinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TiffinServiceImpl implements TiffinService {

    @Autowired
    private TiffinRepository tiffinRepository;

    @Override
    public Tiffin createTiffin(Tiffin tiffin) {
        return tiffinRepository.save(tiffin);
    }

    @Override
    public Tiffin updateTiffin(Long id, Tiffin updatedTiffin) {
        return tiffinRepository.findById(id).map(existingTiffin -> {
            existingTiffin.setMom(updatedTiffin.getMom());
            existingTiffin.setName(updatedTiffin.getName());
            existingTiffin.setDescription(updatedTiffin.getDescription());
            existingTiffin.setPrice(updatedTiffin.getPrice());
            existingTiffin.setAvailable(updatedTiffin.isAvailable());
            // createdAt is set only once at creation time
            return tiffinRepository.save(existingTiffin);
        }).orElseThrow(() -> new RuntimeException("Tiffin not found with id: " + id));
    }

    @Override
    public Optional<Tiffin> getTiffinById(Long id) {
        return tiffinRepository.findById(id);
    }

    @Override
    public List<Tiffin> getAllTiffins() {
        return tiffinRepository.findAll();
    }

    @Override
    public void deleteTiffin(Long id) {
        if (!tiffinRepository.existsById(id)) {
            throw new RuntimeException("Tiffin not found with id: " + id);
        }
        tiffinRepository.deleteById(id);
    }
}

