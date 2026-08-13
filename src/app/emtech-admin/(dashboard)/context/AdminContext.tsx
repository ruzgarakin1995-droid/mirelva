"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type OrderItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

export type Document = {
  id: string;
  name: string;
  url: string;
};

export type Reminder = {
  id: string;
  title: string;
  note?: string;
  targetDate: string; 
  repeatPattern?: 'NONE' | 'HOURLY' | 'DAILY' | 'WEEKLY' | 'MONTHLY';
  status: 'PENDING' | 'COMPLETED' | 'SNOOZED' | 'CANCELLED';
  snoozedUntil?: string; 
  createdAt: string;
  completedAt?: string;
  actionNote?: string; // Note for early completion or cancellation
};


export type Order = {
  id: string;
  customerId?: string; 
  date: string;
  customerName: string;
  customerCompanyName?: string;
  customerPhone: string;
  customerAddress: string;
  items: OrderItem[];
  totalAmount: number;
  
  shippingCompany?: string;
  trackingNumber?: string;
  shippingCost?: number;
  costOfGoods?: number;
  documents?: Document[];

  status: 'PENDING' | 'PROCESSING' | 'SHIPPED' | 'COMPLETED' | 'CANCELLED';
  paymentStatus: 'PAID' | 'UNPAID' | 'REFUNDED';
  notes?: string;
  orderNotes?: CrmNote[];
};

export type CrmNote = {
  id: string;
  content: string;
  timestamp: string;
};

export type Customer = {
  id: string;
  name: string;
  companyName?: string;
  phone: string;
  email: string;
  address: string;
  status: 'VIP' | 'ACTIVE' | 'INACTIVE' | 'LEAD';
  totalSpent: number;
  totalPaid: number;
  lastOrderDate: string;
  joinDate: string;
  notes: CrmNote[];
  documents: Document[];
};

export type Application = {
  id: string;
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  city: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  date: string;
  notes?: string;
};

type AdminContextType = {
  customers: Customer[];
  orders: Order[];
  applications: Application[];
  setCustomers: (customers: Customer[]) => void;
  setOrders: (orders: Order[]) => void;
  addOrder: (order: Order) => void;
  updateOrder: (id: string, updates: Partial<Order>) => void;
  addCustomer: (customer: Customer) => void;
  updateCustomer: (id: string, updates: Partial<Customer>) => void;
  deleteCustomer: (id: string) => void;
  updateApplicationStatus: (id: string, status: 'APPROVED' | 'REJECTED') => void;
  reminders: Reminder[];
  addReminder: (reminder: Omit<Reminder, 'id' | 'createdAt' | 'status'>) => void;
  updateReminder: (id: string, updates: Partial<Reminder>) => void;
  deleteReminder: (id: string) => void;
  cancelReminder: (id: string, note?: string) => void;
  completeReminder: (id: string, note?: string) => void;
  snoozeReminder: (id: string, hours: number) => void;
};

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const MOCK_CUSTOMERS: Customer[] = [
  {
    id: 'CUST-1',
    name: 'Elif Şahin',
    companyName: 'Şahin Mimarlık Ltd. Şti.',
    phone: '0532 999 88 77',
    email: 'elif.sahin@example.com',
    address: 'Kadıköy, İstanbul',
    status: 'VIP',
    totalSpent: 45000,
    totalPaid: 45000,
    lastOrderDate: '2023-10-26',
    joinDate: '2022-01-15',
    notes: [
      { id: 'NOTE-1', content: 'Sürekli Apple ürünleri satın alıyor. Yeni çıkan modeller için öncelikli haber verilmesini istiyor.', timestamp: '2023-10-26T14:30:00Z' }
    ],
    documents: [
      { id: 'DOC-001', name: 'Kurumsal_Sozlesme.jpg', url: 'https://images.unsplash.com/photo-1607593635749-6238b1638686?q=80&w=250&auto=format&fit=crop' }
    ]
  },
  {
    id: 'CUST-2',
    name: 'Mustafa Yılmaz',
    companyName: 'Yılmaz Oto',
    phone: '0533 111 22 33',
    email: 'm.yilmaz@example.com',
    address: 'Çankaya, Ankara',
    status: 'ACTIVE',
    totalSpent: 13000,
    totalPaid: 10000,
    lastOrderDate: '2023-10-27',
    joinDate: '2023-05-10',
    notes: [
      { id: 'NOTE-2', content: 'Geçen hafta ekran değişimi yaptırdı. Kalan 2500 TL ödemesini haftaya yapacak.', timestamp: '2023-10-27T10:15:00Z' }
    ],
    documents: []
  }
];

const MOCK_ORDERS: Order[] = [
  {
    id: 'ORD-2023-1045',
    customerId: 'CUST-1',
    date: '2023-10-26T14:30:00',
    customerName: 'Elif Şahin',
    customerCompanyName: 'Şahin Mimarlık Ltd. Şti.',
    customerPhone: '0532 999 88 77',
    customerAddress: 'Kadıköy, İstanbul',
    items: [
      { id: 'PROD-1', name: 'iPhone 15 Pro Max 256GB', quantity: 1, price: 45000 }
    ],
    totalAmount: 45000,
    costOfGoods: 38000,
    shippingCompany: 'Yurtiçi Kargo',
    trackingNumber: 'YK-123456789',
    shippingCost: 150,
    documents: [],
    status: 'COMPLETED',
    paymentStatus: 'PAID',
    notes: 'Kurye teslimat istedi.'
  },
  {
    id: 'ORD-2023-1046',
    customerId: 'CUST-2',
    date: '2023-10-27T09:15:00',
    customerName: 'Mustafa Yılmaz',
    customerCompanyName: 'Yılmaz Oto',
    customerPhone: '0533 111 22 33',
    customerAddress: 'Çankaya, Ankara',
    items: [
      { id: 'PROD-2', name: 'Ekran Değişimi (iPhone 13)', quantity: 1, price: 12500 },
      { id: 'PROD-3', name: 'Kırılmaz Cam', quantity: 1, price: 500 }
    ],
    totalAmount: 13000,
    costOfGoods: 6000,
    shippingCost: 0,
    documents: [],
    status: 'PENDING',
    paymentStatus: 'UNPAID',
    notes: 'Ödeme kapıda kredi kartı ile yapılacak.'
  }
];

const MOCK_APPLICATIONS: Application[] = [
  {
    id: 'APP-1',
    companyName: 'TechStore Elektronik',
    contactPerson: 'Ahmet Yılmaz',
    phone: '0532 123 45 67',
    email: 'ahmet@techstore.com',
    city: 'İstanbul',
    status: 'PENDING',
    date: '2023-10-25',
    notes: 'İstanbul Anadolu yakasında 3 şubemiz bulunmaktadır. Cep telefonu kılıf ve aksesuarları satışı yapıyoruz.'
  },
  {
    id: 'APP-2',
    companyName: 'Mobil Center',
    contactPerson: 'Ayşe Demir',
    phone: '0533 987 65 43',
    email: 'ayse@mobilcenter.net',
    city: 'Ankara',
    status: 'APPROVED',
    date: '2023-10-24'
  },
  {
    id: 'APP-3',
    companyName: 'Zirve İletişim',
    contactPerson: 'Mehmet Kaya',
    phone: '0544 555 44 33',
    email: 'info@zirveiletisim.com.tr',
    city: 'İzmir',
    status: 'REJECTED',
    date: '2023-10-20'
  }
];

export function AdminProvider({ children }: { children: ReactNode }) {
  const [customers, setCustomersState] = useState<Customer[]>([]);
  const [orders, setOrdersState] = useState<Order[]>([]);
  const [applications, setApplicationsState] = useState<Application[]>([]);
  const [reminders, setRemindersState] = useState<Reminder[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedCustomers = localStorage.getItem('emtech_customers');
    const storedOrders = localStorage.getItem('emtech_orders');
    const storedApps = localStorage.getItem('emtech_apps');
    
    if (storedCustomers) setCustomersState(JSON.parse(storedCustomers));
    else { setCustomersState(MOCK_CUSTOMERS); localStorage.setItem('emtech_customers', JSON.stringify(MOCK_CUSTOMERS)); }

    if (storedOrders) setOrdersState(JSON.parse(storedOrders));
    else { setOrdersState(MOCK_ORDERS); localStorage.setItem('emtech_orders', JSON.stringify(MOCK_ORDERS)); }

    if (storedApps) setApplicationsState(JSON.parse(storedApps));
    else { setApplicationsState(MOCK_APPLICATIONS); localStorage.setItem('emtech_apps', JSON.stringify(MOCK_APPLICATIONS)); }
    
    const storedReminders = localStorage.getItem('emtech_reminders');
    if (storedReminders) setRemindersState(JSON.parse(storedReminders));
    
    setIsLoaded(true);
  }, []);

  const setCustomers = (newCustomers: Customer[]) => {
    setCustomersState(newCustomers);
    localStorage.setItem('emtech_customers', JSON.stringify(newCustomers));
  };

  const setOrders = (newOrders: Order[]) => {
    setOrdersState(newOrders);
    localStorage.setItem('emtech_orders', JSON.stringify(newOrders));
  };

  const setApplications = (newApps: Application[]) => {
    setApplicationsState(newApps);
    localStorage.setItem('emtech_apps', JSON.stringify(newApps));
  };

  const setReminders = (newReminders: Reminder[]) => {
    setRemindersState(newReminders);
    localStorage.setItem('emtech_reminders', JSON.stringify(newReminders));
  };

  const addCustomer = (customer: Customer) => {
    setCustomers([customer, ...customers]);
  };

  const updateCustomer = (id: string, updates: Partial<Customer>) => {
    setCustomers(customers.map(c => c.id === id ? { ...c, ...updates } : c));
  };

  const deleteCustomer = (id: string) => {
    setCustomers(customers.filter(c => c.id !== id));
  };

  const updateApplicationStatus = (id: string, status: 'APPROVED' | 'REJECTED') => {
    const app = applications.find(a => a.id === id);
    if (!app) return;

    setApplications(applications.map(a => a.id === id ? { ...a, status } : a));

    if (status === 'APPROVED' && app.status !== 'APPROVED') {
      const exists = customers.find(c => c.phone.replace(/\s+/g, '') === app.phone.replace(/\s+/g, ''));
      if (!exists) {
        const newNote: CrmNote = {
          id: 'NOTE-' + Math.random().toString(36).substr(2, 6),
          content: `Bayi başvurusu onaylanarak otomatik eklendi.\nEk Notlar: ${app.notes || '-'}`,
          timestamp: new Date().toISOString()
        };

        const newCustomer: Customer = {
          id: 'CUST-' + Math.random().toString(36).substr(2, 9),
          name: app.contactPerson,
          companyName: app.companyName,
          phone: app.phone,
          email: app.email,
          address: app.city,
          status: 'ACTIVE',
          totalSpent: 0,
          totalPaid: 0,
          lastOrderDate: '-',
          joinDate: new Date().toISOString().split('T')[0],
          notes: [newNote],
          documents: []
        };
        addCustomer(newCustomer);
      } else {
        const newNote: CrmNote = {
          id: 'NOTE-' + Math.random().toString(36).substr(2, 6),
          content: 'Bayi başvurusu onaylandı.',
          timestamp: new Date().toISOString()
        };
        updateCustomer(exists.id, { notes: [...(exists.notes || []), newNote] });
      }
    }
  };

  const addOrder = (order: Order) => {
    let targetCustomerId = order.customerId;
    let targetCustomer = customers.find(c => c.id === targetCustomerId);

    if (!targetCustomer) {
      targetCustomer = customers.find(c => 
        c.phone.replace(/\s+/g, '') === order.customerPhone.replace(/\s+/g, '') ||
        c.name.toLowerCase() === order.customerName.toLowerCase() ||
        (c.companyName && order.customerCompanyName && c.companyName.toLowerCase() === order.customerCompanyName.toLowerCase())
      );
    }

    let updatedCustomers = [...customers];

    if (targetCustomer) {
      order.customerId = targetCustomer.id;
      updatedCustomers = updatedCustomers.map(c => {
        if (c.id === targetCustomer!.id) {
          return {
            ...c,
            totalSpent: c.totalSpent + order.totalAmount,
            totalPaid: order.paymentStatus === 'PAID' ? c.totalPaid + order.totalAmount : c.totalPaid,
            lastOrderDate: order.date.split('T')[0],
          };
        }
        return c;
      });
    } else {
      const newNote: CrmNote = {
        id: 'NOTE-' + Math.random().toString(36).substr(2, 6),
        content: 'Sipariş sisteminden otomatik oluşturuldu.',
        timestamp: new Date().toISOString()
      };

      const newCustomer: Customer = {
        id: 'CUST-' + Math.random().toString(36).substr(2, 9),
        name: order.customerName,
        companyName: order.customerCompanyName,
        phone: order.customerPhone,
        address: order.customerAddress,
        email: '',
        status: 'ACTIVE',
        totalSpent: order.totalAmount,
        totalPaid: order.paymentStatus === 'PAID' ? order.totalAmount : 0,
        lastOrderDate: order.date.split('T')[0],
        joinDate: new Date().toISOString().split('T')[0],
        notes: [newNote],
        documents: []
      };
      order.customerId = newCustomer.id;
      updatedCustomers = [newCustomer, ...updatedCustomers];
    }

    setCustomers(updatedCustomers);
    setOrders([order, ...orders]);
  };

  const updateOrder = (id: string, updates: Partial<Order>) => {
    const originalOrder = orders.find(o => o.id === id);
    if (!originalOrder) return;

    let updatedCustomers = [...customers];

    if (updates.paymentStatus && updates.paymentStatus !== originalOrder.paymentStatus) {
      const customerId = originalOrder.customerId;
      if (customerId) {
        updatedCustomers = updatedCustomers.map(c => {
          if (c.id === customerId) {
            let newPaid = c.totalPaid;
            if (originalOrder.paymentStatus === 'PAID') newPaid -= originalOrder.totalAmount;
            if (updates.paymentStatus === 'PAID') newPaid += (updates.totalAmount ?? originalOrder.totalAmount);
            return { ...c, totalPaid: newPaid };
          }
          return c;
        });
      }
    }

    setCustomers(updatedCustomers);
    setOrders(orders.map(o => o.id === id ? { ...o, ...updates } : o));
  };

  const addReminder = (reminderData: Omit<Reminder, 'id' | 'createdAt' | 'status'>) => {
    const newReminder: Reminder = {
      ...reminderData,
      id: 'REM-' + Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
      status: 'PENDING'
    };
    setReminders([...reminders, newReminder]);
  };

  const updateReminder = (id: string, updates: Partial<Reminder>) => {
    setReminders(reminders.map(r => r.id === id ? { ...r, ...updates } : r));
  };

  const deleteReminder = (id: string) => {
    setReminders(reminders.filter(r => r.id !== id));
  };

  const cancelReminder = (id: string, note?: string) => {
    setReminders(reminders.map(r => r.id === id ? { ...r, status: 'CANCELLED', completedAt: new Date().toISOString(), actionNote: note } : r));
  };

  const completeReminder = (id: string, note?: string) => {
    const reminder = reminders.find(r => r.id === id);
    if (!reminder) return;

    if (reminder.repeatPattern && reminder.repeatPattern !== 'NONE') {
      let nextTarget = new Date(reminder.targetDate);
      const now = new Date();
      // Calculate next occurrence
      if (reminder.repeatPattern === 'HOURLY') {
        nextTarget.setHours(nextTarget.getHours() + 1);
        while (nextTarget <= now) nextTarget.setHours(nextTarget.getHours() + 1);
      } else if (reminder.repeatPattern === 'DAILY') {
        nextTarget.setDate(nextTarget.getDate() + 1);
        while (nextTarget <= now) nextTarget.setDate(nextTarget.getDate() + 1);
      } else if (reminder.repeatPattern === 'WEEKLY') {
        nextTarget.setDate(nextTarget.getDate() + 7);
        while (nextTarget <= now) nextTarget.setDate(nextTarget.getDate() + 7);
      } else if (reminder.repeatPattern === 'MONTHLY') {
        nextTarget.setMonth(nextTarget.getMonth() + 1);
        while (nextTarget <= now) nextTarget.setMonth(nextTarget.getMonth() + 1);
      }
      
      // Create a history record for the completed instance
      const historyRecord: Reminder = {
        ...reminder,
        id: reminder.id + '-hist-' + Date.now(),
        status: 'COMPLETED',
        completedAt: new Date().toISOString(),
        actionNote: note,
        repeatPattern: 'NONE' // The history record shouldn't repeat
      };

      setReminders([
        ...reminders.map(r => r.id === id ? { ...r, targetDate: nextTarget.toISOString(), status: 'PENDING', snoozedUntil: undefined } : r),
        historyRecord
      ]);
    } else {
      setReminders(reminders.map(r => r.id === id ? { ...r, status: 'COMPLETED', snoozedUntil: undefined, completedAt: new Date().toISOString(), actionNote: note } : r));
    }
  };

  const snoozeReminder = (id: string, hours: number) => {
    const snoozeTime = new Date();
    snoozeTime.setHours(snoozeTime.getHours() + hours);
    setReminders(reminders.map(r => r.id === id ? { ...r, status: 'SNOOZED', snoozedUntil: snoozeTime.toISOString() } : r));
  };

  if (!isLoaded) return null;

  return (
    <AdminContext.Provider value={{
      customers, orders, applications, reminders, setCustomers, setOrders,
      addCustomer, updateCustomer, deleteCustomer,
      addOrder, updateOrder,
      updateApplicationStatus,
      addReminder, updateReminder, deleteReminder, cancelReminder, completeReminder, snoozeReminder
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
