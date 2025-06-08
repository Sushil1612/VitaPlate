package com.cdac.vitaplate.serviceImpl;

import com.cdac.vitaplate.entities.Menu;
import com.cdac.vitaplate.repositories.MenuRepository;
import com.cdac.vitaplate.services.MenuService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MenuServiceImpl implements MenuService {

    @Autowired
    private MenuRepository menuRepository;

    @Override
    public Menu createMenu(Menu menu) {
        return menuRepository.save(menu);
    }

    @Override
    public Menu updateMenu(Long id, Menu updatedMenu) {
        return menuRepository.findById(id).map(existingMenu -> {
            existingMenu.setTiffin(updatedMenu.getTiffin());
            existingMenu.setDate(updatedMenu.getDate());
            existingMenu.setAvailable(updatedMenu.isAvailable());
            return menuRepository.save(existingMenu);
        }).orElseThrow(() -> new RuntimeException("Menu not found with id: " + id));
    }

    @Override
    public Optional<Menu> getMenuById(Long id) {
        return menuRepository.findById(id);
    }

    @Override
    public List<Menu> getAllMenus() {
        return menuRepository.findAll();
    }

    @Override
    public void deleteMenu(Long id) {
        if (!menuRepository.existsById(id)) {
            throw new RuntimeException("Menu not found with id: " + id);
        }
        menuRepository.deleteById(id);
    }
}
