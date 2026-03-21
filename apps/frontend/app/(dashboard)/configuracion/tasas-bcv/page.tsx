'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  RefreshCw,
  DollarSign,
  TrendingUp,
  Building2,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Download,
  Image,
} from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface TasaOfficial {
  currency: string;
  rate: string;
}

interface TasaBank {
  bank: string;
  purchase: string;
  sale: string;
}

interface TasaIntervention {
  date: string;
  week: string;
  rate: string;
}

interface TasaBcvData {
  success: boolean;
  timestamp: string;
  rates?: {
    official: TasaOfficial[];
    banks: TasaBank[];
    intervention: TasaIntervention;
  };
  outputFiles?: {
    tasa_1: { exists: boolean; size: number };
    tasa_2: { exists: boolean; size: number };
    tasa_3: { exists: boolean; size: number };
  };
  error?: string;
}

export default function TasasBcvPage() {
  const [data, setData] = useState<TasaBcvData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  const fetchTasaBcv = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/skills/tasa-bcv`);
      const result = await response.json();
      setData(result);
      setLastUpdate(new Date());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al obtener tasas');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasaBcv();
  }, []);

  const getImageUrl = (type: 'tasa_1' | 'tasa_2' | 'tasa_3') => {
    return `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/skills/tasa-bcv/image/${type}?t=${Date.now()}`;
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tasas BCV</h1>
          <p className="text-muted-foreground">
            Tasas de cambio oficiales del Banco Central de Venezuela
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={fetchTasaBcv}
            disabled={loading}
            className="gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            {loading ? 'Actualizando...' : 'Actualizar'}
          </Button>
          {lastUpdate && (
            <Badge variant="outline" className="gap-2">
              <Calendar className="w-3 h-3" />
              {format(lastUpdate, "dd 'de' MMMM, yyyy HH:mm", { locale: es })}
            </Badge>
          )}
        </div>
      </div>

      {/* Error Alert */}
      {error && (
        <Card className="border-red-200 bg-red-50">
          <CardHeader className="pb-3">
            <CardTitle className="text-red-800 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Error
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-600">{error}</p>
          </CardContent>
        </Card>
      )}

      {/* Success Banner */}
      {data?.success && (
        <Card className="border-green-200 bg-green-50">
          <CardContent className="py-4">
            <div className="flex items-center gap-2 text-green-800">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-medium">Tasas actualizadas exitosamente</span>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="official" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="official">
            <DollarSign className="w-4 h-4 mr-2" />
            Tasas Oficiales
          </TabsTrigger>
          <TabsTrigger value="banks">
            <Building2 className="w-4 h-4 mr-2" />
            Tasas por Banco
          </TabsTrigger>
          <TabsTrigger value="intervention">
            <TrendingUp className="w-4 h-4 mr-2" />
            Intervención Cambiaria
          </TabsTrigger>
        </TabsList>

        {/* Tasas Oficiales */}
        <TabsContent value="official" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Tasas Oficiales del BCV
              </CardTitle>
              <CardDescription>
                Tasas de cambio oficiales publicadas por el Banco Central de Venezuela
              </CardDescription>
            </CardHeader>
            <CardContent>
              {data?.rates?.official && data.rates.official.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Moneda</TableHead>
                      <TableHead className="text-right">Tasa de Cambio (Bs.)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.rates.official.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.currency}</TableCell>
                        <TableCell className="text-right font-bold text-lg">
                          Bs. {parseFloat(item.rate).toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <DollarSign className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>No hay tasas oficiales disponibles</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Imagen Generada */}
          {data?.outputFiles?.tasa_1?.exists && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Image className="w-5 h-5" />
                  Imagen Generada - Tipo de Cambio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                  <img
                    src={getImageUrl('tasa_1')}
                    alt="Tipo de Cambio BCV"
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="flex justify-end mt-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={getImageUrl('tasa_1')} download="tasa_oficial.png">
                      <Download className="w-4 h-4 mr-2" />
                      Descargar Imagen
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Tasas por Banco */}
        <TabsContent value="banks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Tasas Informativas por Banco
              </CardTitle>
              <CardDescription>
                Tasas de compra y venta reportadas por diferentes instituciones bancarias
              </CardDescription>
            </CardHeader>
            <CardContent>
              {data?.rates?.banks && data.rates.banks.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Banco</TableHead>
                      <TableHead className="text-right">Compra (Bs.)</TableHead>
                      <TableHead className="text-right">Venta (Bs.)</TableHead>
                      <TableHead className="text-right">Spread</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.rates.banks.map((item, index) => {
                      const spread = parseFloat(item.sale) - parseFloat(item.purchase);
                      return (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.bank}</TableCell>
                          <TableCell className="text-right text-green-600 font-medium">
                            {parseFloat(item.purchase).toFixed(2)}
                          </TableCell>
                          <TableCell className="text-right text-red-600 font-medium">
                            {parseFloat(item.sale).toFixed(2)}
                          </TableCell>
                          <TableCell className="text-right text-muted-foreground">
                            {spread.toFixed(2)}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Building2 className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>No hay tasas de bancos disponibles</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Imagen Generada */}
          {data?.outputFiles?.tasa_2?.exists && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Image className="w-5 h-5" />
                  Imagen Generada - Tasas por Banco
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                  <img
                    src={getImageUrl('tasa_2')}
                    alt="Tasas por Banco BCV"
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="flex justify-end mt-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={getImageUrl('tasa_2')} download="tasas_bancos.png">
                      <Download className="w-4 h-4 mr-2" />
                      Descargar Imagen
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Intervención Cambiaria */}
        <TabsContent value="intervention" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Intervención Cambiaria Semanal
              </CardTitle>
              <CardDescription>
                Tasa de intervención cambiaria publicada semanalmente por el BCV
              </CardDescription>
            </CardHeader>
            <CardContent>
              {data?.rates?.intervention?.rate ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardDescription>Semana</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold">
                          {data.rates.intervention.week}
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardDescription>Fecha</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold">
                          {data.rates.intervention.date}
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardDescription>Tasa de Intervención</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-3xl font-bold text-primary">
                          Bs. {parseFloat(data.rates.intervention.rate).toFixed(2)}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <TrendingUp className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>No hay información de intervención cambiaria disponible</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Imagen Generada */}
          {data?.outputFiles?.tasa_3?.exists && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Image className="w-5 h-5" />
                  Imagen Generada - Intervención
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                  <img
                    src={getImageUrl('tasa_3')}
                    alt="Intervención Cambiaria BCV"
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="flex justify-end mt-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={getImageUrl('tasa_3')} download="intervencion_cambiaria.png">
                      <Download className="w-4 h-4 mr-2" />
                      Descargar Imagen
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      {/* Información de Automatización */}
      <Card>
        <CardHeader>
          <CardTitle>Automatización</CardTitle>
          <CardDescription>
            Configuración de actualización automática de tasas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="space-y-1">
                <p className="font-medium">Actualización Automática</p>
                <p className="text-sm text-muted-foreground">
                  Las tasas se actualizan automáticamente de lunes a viernes a las 8:00 AM
                </p>
              </div>
              <Badge variant="default" className="bg-green-600">
                Activo
              </Badge>
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Schedule: <code className="bg-muted px-2 py-1 rounded">0 8 * * 1-5</code> (Lunes a Viernes, 8:00 AM)
              </p>
              <p className="flex items-center gap-2 mt-2">
                <RefreshCw className="w-4 h-4" />
                Workflow n8n: <code className="bg-muted px-2 py-1 rounded">bcv-tasa-automation</code>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
