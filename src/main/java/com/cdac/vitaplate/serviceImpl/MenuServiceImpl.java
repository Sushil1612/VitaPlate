package com.cdac.vitaplate.serviceImpl;

import com.cdac.vitaplate.dto.MenuDTO;
import com.cdac.vitaplate.dto.MenuItemDTO;
import com.cdac.vitaplate.dto.MenuRequest;
import com.cdac.vitaplate.entities.Menu;
import com.cdac.vitaplate.entities.MenuItem;
import com.cdac.vitaplate.entities.Tiffin;
import com.cdac.vitaplate.repositories.MenuRepository;
import com.cdac.vitaplate.repositories.TiffinRepository;
import com.cdac.vitaplate.repositories.UserRepository;
import com.cdac.vitaplate.services.MenuService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MenuServiceImpl implements MenuService {

    @Autowired
    private MenuRepository menuRepository;

    @Autowired
    private TiffinRepository tiffinRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Menu createMenu(MenuRequest dto) {
        // Retrieve MOM by ID (assuming MOM's ID is provided)
        var mom = userRepository.findById(dto.getMomId())
                .orElseThrow(() -> new RuntimeException("MOM not found with id: " + dto.getMomId()));

        // Create Menu
        Menu menu = new Menu();
        menu.setMom(mom);
        menu.setDate(dto.getDate());
        menu.setAvailable(dto.isAvailable());

        // Create MenuItems
        List<MenuItem> menuItems = dto.getItems().stream().map(itemDTO -> {
            MenuItem menuItem = new MenuItem();
            menuItem.setMenu(menu); // Set the parent menu
            menuItem.setName(itemDTO.getName());
            menuItem.setDescription(itemDTO.getDescription());
            menuItem.setAvailable(itemDTO.isAvailable());
            menuItem.setPrice(itemDTO.getPrice());
            return menuItem;
        }).collect(Collectors.toList());

        menu.setItems(menuItems);

        // Save Menu and MenuItems
        menuRepository.save(menu);

        return menu;
    }

    // @Override
    // public Menu updateMenu(Long id, Menu updatedMenu) {
    // return menuRepository.findById(id).map(existingMenu -> {
    // existingMenu.setTiffin(updatedMenu.getTiffin());
    // existingMenu.setDate(updatedMenu.getDate());
    // existingMenu.setAvailable(updatedMenu.isAvailable());
    // return menuRepository.save(existingMenu);
    // }).orElseThrow(() -> new RuntimeException("Menu not found with id: " + id));
    // }

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

    @Override
    public List<MenuDTO> getTodayMenus() {
        LocalDate today = LocalDate.now();
        List<Menu> menus = menuRepository.findByDateAndIsAvailableTrue(today);

        return menus.stream().map(menu -> {
            List<MenuItemDTO> itemDTOs = menu.getItems().stream()
                    .filter(item -> item.isAvailable())
                    .map(item -> new MenuItemDTO(
                            item.getName(),
                            item.getDescription(),
                            item.getPrice(),
                            true))
                    .collect(Collectors.toList());

            return new MenuDTO(
                    menu.getMom().getId(),
                    menu.getMom().getName(),
                    menu.getMom().getAddress(),
                    itemDTOs);
        }).collect(Collectors.toList());
    }

}
