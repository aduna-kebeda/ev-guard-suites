import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import DashboardLayout from '@/components/DashboardLayout';
import { FileText, Download, Eye, Upload, File, Shield, FileCheck } from 'lucide-react';

const Documents = () => {
  const documents = [
    {
      id: 1,
      name: 'Purchase Agreement',
      type: 'Contract',
      vehicle: 'EcoSport Sedan',
      date: '2023-06-15',
      size: '2.4 MB',
      icon: FileText
    },
    {
      id: 2,
      name: 'Vehicle Registration',
      type: 'Registration',
      vehicle: 'EcoSport Sedan',
      date: '2023-06-20',
      size: '1.8 MB',
      icon: FileCheck
    },
    {
      id: 3,
      name: 'Warranty Certificate',
      type: 'Warranty',
      vehicle: 'EcoSport Sedan',
      date: '2023-06-15',
      size: '1.2 MB',
      icon: Shield
    },
    {
      id: 4,
      name: 'Insurance Policy',
      type: 'Insurance',
      vehicle: 'EcoSport Sedan',
      date: '2023-06-22',
      size: '3.1 MB',
      icon: Shield
    },
    {
      id: 5,
      name: 'Service Manual',
      type: 'Manual',
      vehicle: 'EcoSport Sedan',
      date: '2023-06-15',
      size: '15.7 MB',
      icon: File
    }
  ];

  return (
    <DashboardLayout
      title="Documents"
      description="Access and manage your vehicle documents"
      actions={
        <Button className="gap-2">
          <Upload className="h-4 w-4" />
          Upload Document
        </Button>
      }
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <Card className="border-none bg-card/80 shadow-lg shadow-primary/5">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="mb-1 text-sm text-muted-foreground">Total Documents</div>
                <div className="text-2xl font-bold">{documents.length}</div>
              </div>
              <FileText className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-none bg-card/80 shadow-lg shadow-primary/5">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="mb-1 text-sm text-muted-foreground">Active Warranties</div>
                <div className="text-2xl font-bold">1</div>
              </div>
              <Shield className="h-8 w-8 text-secondary" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-none bg-card/80 shadow-lg shadow-primary/5">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="mb-1 text-sm text-muted-foreground">Storage Used</div>
                <div className="text-2xl font-bold">24.2 MB</div>
              </div>
              <File className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none bg-card/80 shadow-lg shadow-primary/5">
        <CardHeader>
          <CardTitle>All Documents</CardTitle>
          <CardDescription>Your vehicle-related documents and files</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {documents.map((doc) => (
              <div key={doc.id} className="flex flex-col gap-4 rounded-xl border border-border/60 bg-background/40 p-4 shadow-sm transition hover:border-primary/40 hover:shadow-md md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <doc.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{doc.name}</div>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <Badge variant="outline">{doc.type}</Badge>
                      <span>{doc.vehicle}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{doc.date}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{doc.size}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Eye className="h-4 w-4" />
                    View
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/30 shadow-none">
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <Shield className="h-6 w-6 text-primary" />
            <div>
              <h3 className="mb-2 font-semibold">Document Security</h3>
              <p className="text-sm text-muted-foreground">
                All your documents are stored securely with encryption. Only you and authorized service personnel can access them.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Documents;
