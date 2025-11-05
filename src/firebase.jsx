const useFirebase = () => {
    const [db, setDb] = useState(null);
    const [userId, setUserId] = useState(null);
    const [isFirebaseReady, setIsFirebaseReady] = useState(false);

    useEffect(() => {
        if (!firebaseConfig || Object.keys(firebaseConfig).length === 0) {
            console.error("Firebase config is missing or empty.");
            return;
        }

        try {
            const app = initializeApp(firebaseConfig);
            const firestore = getFirestore(app);
            const auth = getAuth(app);
            
            const setupAuth = async () => {
                if (initialAuthToken) {
                    await signInWithCustomToken(auth, initialAuthToken);
                } else {
                    // Fallback to anonymous sign-in if no token is provided
                    await signInAnonymously(auth);
                }
                
                const currentUserId = auth.currentUser?.uid || crypto.randomUUID();
                
                setDb(firestore);
                setUserId(currentUserId);
                setIsFirebaseReady(true);
                console.log(`Firebase initialized. User ID: ${currentUserId}`);
            };

            setupAuth();
            
        } catch (error) {
            console.error("Error initializing Firebase:", error);
        }
    }, []);

    return { db, userId, isFirebaseReady };
};

export default useFirebase;