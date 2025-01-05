interface Admin {
  _id: string;
  email: string;
  password: string;
  role: "superadmin" | "admin";
  createdAt: Date;
  updatedAt: Date;
}

interface Project {
  _id: string;
  name: string;
  location: string;
  description?: string;
  status: "ongoing" | "completed";
  images: string[];
  seoMetadata?: {
    title: string;
    description: string;
    keywords: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}

interface Lead {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  status: "new" | "contacted";
  createdAt: Date;
  updatedAt: Date;
}

type ActionResponse<T = null> = {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    details?: Record<string, string[]>;
  };
  status?: number;
};

type SuccessResponse<T = null> = ActionResponse<T> & { success: true };
type ErrorResponse = ActionResponse<undefined> & { success: false };

type APIErrorResponse = NextResponse<ErrorResponse>;
type APIResponse<T = null> = NextResponse<SuccessResponse<T> | ErrorResponse>;
