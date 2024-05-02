package com.example.Deplacement.controller;

import com.example.Deplacement.Model.User;
import com.example.Deplacement.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Users")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/User")
    public String addUser(@RequestBody User user) {
        userService.SaveUser(user);
        return "new User was added";
    }

    @GetMapping("/afficher")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/afficher/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.GetUser(id);
    }

    @DeleteMapping("/User/{id}")
    public User deleteUser(@PathVariable Long id) {
        return userService.DeleteUser(id);
    }

    @PutMapping("/User/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        return userService.UpdateUser(user, id);
    }
}
