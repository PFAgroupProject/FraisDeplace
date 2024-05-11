package com.example.Deplacement.Service;

import com.example.Deplacement.Model.User;
import com.example.Deplacement.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServicelmpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User SaveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User GetUser(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public User DeleteUser(Long id) {
        userRepository.deleteById(id);
        return null;
    }

    @Override
    public User UpdateUser(User user, Long id) {
        return userRepository.save(user);
    }

    @Override
    public User validateUser(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }
}
