import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const useAuthStore = create((set) => ({
    forgotEmail: '',
    setForgotEmail: (email) => set({ forgotEmail: email }),
    user: null,
    token: null,
    isLoading: false,
    isCheckingAuth:true,
    authMethod: null,
    
    

    register: async (firstname,lastname,username,email,phone,password) => {
        set({ isLoading: true,authMethod: "register" });
        try {
            const response= await fetch("https://aba1b92a-dc6b-4d7e-8a0f-13dc172b5bf0-00-21h5imnegsexy.spock.replit.dev/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstname,
                    lastname,
                    username,
                    email,
                    phone,
                    password
                }),
            })
            let data;
            try {
             data = await response.json();
             } catch (jsonError) {
             const text = await response.text();
             console.error("Backend did not return JSON:", text);
             throw new Error("Server error: Invalid JSON response");
            }

            if (!response.ok) {
            throw new Error(data?.message || "Something went wrong");
             }

            await AsyncStorage.setItem("user", JSON.stringify(data.user));
            await AsyncStorage.setItem("token", data.token);

            set({ token: data.token, user:data.user, isLoading: false});

            return { success: true};

        } catch (error) {
            set({ isLoading: false });
            return {success: false, error: error.message };
        }
    },


    login: async(email,password) => {
        set({ isLoading: true, authMethod: "login"  });

        try{
            const response = await fetch("https://aba1b92a-dc6b-4d7e-8a0f-13dc172b5bf0-00-21h5imnegsexy.spock.replit.dev/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Something went wrong");
        
        await AsyncStorage.setItem("user", JSON.stringify(data.user));
        await AsyncStorage.setItem("token", data.token);

        set({ token: data.token, user: data.user, isLoading: false});

        return { success: true};
        } catch (error) {
            set({ isLoading: false });
            return {success: false,error:error.message};
        }
    },

    checkAuth: async () => {
        try {
            const token = await AsyncStorage.getItem("token");
            const userJson = await AsyncStorage.getItem("user");
            const user = userJson ? JSON.parse(userJson) : null;

            set ({ token , user});

        } catch (error) {
            console.log("Auth check failed", error);
        } finally {
            set ({isCheckingAuth: false});
        }
    },

    logout: async () => {
        await AsyncStorage.removeItem("token");
        await AsyncStorage.removeItem("user");
        set ({ token: null, user : null});
    },

    resetPassword: async (token, newPassword) => {
  set({ isLoading: true, authMethod: "resetPassword" });
  try {
    const response = await fetch("https://ton-backend/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, newPassword }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    set({ isLoading: false });

    return { success: true, message: data.message };
  } catch (error) {
    set({ isLoading: false });
    return { success: false, error: error.message };
  }
},
updateUser: (newData) => set((state) => ({
        user: {
            ...state.user,
            ...newData,
        }
    })),
}));