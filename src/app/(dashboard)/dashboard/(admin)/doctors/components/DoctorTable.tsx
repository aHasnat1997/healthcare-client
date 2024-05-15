import DataTable from "@/components/Ui/DataTable";
import { FindAllDoctor } from "@/services/doctors/doctor.action";
import { GridColDef } from "@mui/x-data-grid";

export default async function DoctorTable() {
  const doctorData = await FindAllDoctor();
  const tableColumns: GridColDef<Record<string, any>>[] = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1
    },
    {
      field: 'designation',
      headerName: 'Designation',
      flex: 1
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1
    },
    {
      field: 'contactNumber',
      headerName: 'Contact Number',
      flex: 1
    },
    {
      field: 'experience',
      headerName: 'Experience',
      flex: 1
    },
    {
      field: 'appointmentFee',
      headerName: 'Appointment Fee',
      flex: 1
    },
    {
      field: 'averageRating',
      headerName: 'Average Rating',
      flex: 1
    },
  ];

  return (
    <div>
      <DataTable rows={doctorData.data} columns={tableColumns} />
    </div>
  );
}
