package com.example.Deplacement.Service;

import com.example.Deplacement.Model.User;

import java.util.List;

public interface UserService {
    public User SaveUser(User user);
    public List<User> getAllUsers();
    public User GetUser(Long id);
    public User DeleteUser(Long id);
    public User UpdateUser(User user, Long id);
    public User validateUser(String email, String password);
}
