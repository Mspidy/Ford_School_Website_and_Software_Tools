import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transport-management',
  templateUrl: './transport-management.component.html',
  styleUrls: ['./transport-management.component.css'],
})
export class TransportManagementComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  currentMonth = 'September 2025';
  selectedVehicle: any = null;

  vehicles = [
    {
      number: 'BR10AB1234',
      type: 'Bus',
      route: 'Buxar to Dumraon',
      dailyKm: 40,
      fuelType: 'Diesel',
      monthlyFuelLitres: 120,
      fuelCost: 120 * 95,
      maintenanceCost: 1500,
      totalMonthlyCost: 120 * 95 + 1500,
      driver: {
        name: 'Ravi Yadav',
        license: 'BR1234567890',
        contact: '9876543210',
      },
    },
    {
      number: 'BR10CD5678',
      type: 'Van',
      route: 'Buxar to Chausa',
      dailyKm: 30,
      fuelType: 'Petrol',
      monthlyFuelLitres: 100,
      fuelCost: 100 * 102,
      maintenanceCost: 1200,
      totalMonthlyCost: 100 * 102 + 1200,
      driver: {
        name: 'Suman Singh',
        license: 'BR9876543210',
        contact: '9123456789',
      },
    },
    {
      number: 'BR10EF9012',
      type: 'Mini Bus',
      route: 'Buxar to Itarhi',
      dailyKm: 35,
      fuelType: 'Diesel',
      monthlyFuelLitres: 110,
      fuelCost: 110 * 95,
      maintenanceCost: 1800,
      totalMonthlyCost: 110 * 95 + 1800,
      driver: {
        name: 'Manoj Kumar',
        license: 'BR4567891230',
        contact: '9988776655',
      },
    },
    {
      number: 'BR10GH3456',
      type: 'Auto',
      route: 'Buxar Local',
      dailyKm: 20,
      fuelType: 'Petrol',
      monthlyFuelLitres: 60,
      fuelCost: 60 * 102,
      maintenanceCost: 800,
      totalMonthlyCost: 60 * 102 + 800,
      driver: {
        name: 'Rajesh Verma',
        license: 'BR1122334455',
        contact: '9871234560',
      },
    },
    {
      number: 'BR10IJ7890',
      type: 'Van',
      route: 'Buxar to Nawanagar',
      dailyKm: 25,
      fuelType: 'Diesel',
      monthlyFuelLitres: 90,
      fuelCost: 90 * 95,
      maintenanceCost: 1000,
      totalMonthlyCost: 90 * 95 + 1000,
      driver: {
        name: 'Pawan Singh',
        license: 'BR9988776655',
        contact: '9812345678',
      },
    },
  ];

  openInvoice(vehicle: any) {
    this.selectedVehicle = vehicle;
  }

  closeModal() {
    this.selectedVehicle = null;
  }

  downloadTransportPDF() {
    const element = document.getElementById('transportInvoice');
    if (!element) return;
    // html2pdf().from(element).save(`Transport_Invoice_${this.selectedVehicle.number}.pdf`);
  }
}
