export interface User {
    id: string;
    name: string;
    email: string;
    age: number;
    plan: {
        type: 'lite' | 'basic' | 'premium' | 'ultimate';
        status: 'active' | 'inactive';
        description: string;
        features: {
            conferenceCalling: boolean;
            callWaiting: boolean;
            voicemail: boolean;
        };
    };
}