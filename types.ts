
export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  category: 'بيع' | 'تطوير' | 'بناء';
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
