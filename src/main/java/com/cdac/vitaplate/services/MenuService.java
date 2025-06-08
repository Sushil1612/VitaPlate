package com.cdac.vitaplate.services;

import com.cdac.vitaplate.entities.Menu;

import java.util.List;
import java.util.Optional;

public interface MenuService {
    Menu createMenu(Menu menu);
    Menu updateMenu(Long id, Menu menu);
    Optional<Menu> getMenuById(Long id);
    List<Menu> getAllMenus();
    void deleteMenu(Long id);
}
