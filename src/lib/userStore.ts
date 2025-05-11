// Mock user database stored in localStorage
// This is a simple solution for a demo app that doesn't use MongoDB

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  profilePicture?: string;
  createdAt: Date;
}

// Initial users from auth.ts
const initialUsers = [
  {
    id: "1",
    name: "Demo User",
    email: "user@example.com",
    password: "password123",
    profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    createdAt: new Date(),
  },
  {
    id: "2",
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
    profilePicture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    createdAt: new Date(),
  }
];

class UserStore {
  private users: User[] = [];
  
  constructor() {
    this.initialize();
  }
  
  private initialize() {
    // Only runs in browser
    if (typeof window !== 'undefined') {
      const storedUsers = localStorage.getItem('users');
      if (storedUsers) {
        try {
          const parsedUsers = JSON.parse(storedUsers);
          // Convert string dates back to Date objects
          this.users = parsedUsers.map((user: any) => ({
            ...user,
            createdAt: new Date(user.createdAt)
          }));
        } catch (error) {
          console.error('Failed to parse stored users', error);
          this.resetToInitial();
        }
      } else {
        this.resetToInitial();
      }
    }
  }
  
  private save() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }
  
  private resetToInitial() {
    this.users = [...initialUsers];
    this.save();
  }
  
  getUsers() {
    return this.users;
  }
  
  getUserByEmail(email: string) {
    return this.users.find(user => user.email === email);
  }
  
  getUserById(id: string) {
    return this.users.find(user => user.id === id);
  }
  
  addUser(user: Omit<User, 'id' | 'createdAt'>) {
    const newUser = {
      ...user,
      id: `user-${Date.now()}`,
      createdAt: new Date()
    };
    
    this.users.push(newUser);
    this.save();
    return newUser;
  }
  
  updateUser(id: string, userData: Partial<User>) {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users[index] = {
        ...this.users[index],
        ...userData
      };
      this.save();
      return this.users[index];
    }
    return null;
  }
}

// Export a singleton instance
export const userStore = new UserStore(); 