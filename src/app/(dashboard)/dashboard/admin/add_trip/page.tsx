'use client';

import React, { useState } from "react";
import { Box, Button, Grid, Stack, Typography, styled } from "@mui/material";
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';
import { z } from "zod";
import { Form, FormItem, FormControl, FormMessage, FormField } from "@/components/Ui/Form";
import Image from "next/image";
import { imageUpload } from "@/utils/imageUpload";
import { usePostTripMutation, useUpdateTripMutation } from "@/redux/api/endpoints/tripApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

// Define the schema using zod
const schema = z.object({
  tripTitle: z.string().min(1, "Trip title is required"),
  startingPoint: z.string().min(1, "Starting point is required"),
  destination: z.string().min(1, "Destination is required"),
  startDate: z.date().nullable().refine((val) => val !== null, "Start date is required"),
  endDate: z.date().nullable().refine((val) => val !== null, "End date is required"),
  budget: z.string().min(1, "Budget is required"),
  totalSlots: z.string().min(1, "Total slots are required"),
  activities: z.string().min(1, "Activities are required"),
  tripDetails: z.string().min(1, "Trip details are required"),
});

// Define form values type
type FormValues = z.infer<typeof schema>;

const AddTripPage: React.FC = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [images, setImages] = useState<any[]>([]);
  const [tripData, { isLoading: isTripDataLoading, isSuccess: isTripDataSuccess }] = usePostTripMutation();
  const [updateTripData, { isLoading: isTripUpdateLoading, isSuccess: isTripUpdateSuccess }] = useUpdateTripMutation();
  const router = useRouter();

  const methods = useForm<FormValues>();

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList) {
      setImages((prevImages) => [...prevImages, ...Array.from(fileList)]);
    }
  }

  const handleImageRemove = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  }


  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      schema.parse(data);
      const activitiesArray = data.activities.split(',');

      const tripReqData = {
        ...data,
        budget: Number(data.budget),
        totalSlots: Number(data.totalSlots),
        activities: activitiesArray,
        startDate: new Date(data?.startDate!).toISOString(),
        endDate: new Date(data?.endDate!).toISOString(),
      };

      const { data: tripResData } = await tripData(tripReqData);
      if (tripResData.success) {
        const imageUrls: string[] = [];
        for (const image of images) {
          const res = await imageUpload(image);
          imageUrls.push(res);
        };
        await updateTripData({ tripId: tripResData.data.id, data: { tripImage: imageUrls } });

        router.push('/dashboard/admin/trip_management');
        toast.success(tripResData.message);
      }
      if (!tripResData.success) {
        toast.error(tripResData.message);
      }
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  return (
    <Box>
      <Typography color='text.primary' fontWeight='bold' variant='h4'>
        Add New Trip
      </Typography>
      <Form {...methods}>
        <Box component="form" onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          <Stack direction='column' gap='1.5rem' py='1.5rem'>
            <FormItem>
              <FormField
                name="tripTitle"
                control={methods.control}
                render={({ field }) => (
                  <FormControl {...field} label="Trip Title" />
                )}
              />
              <FormMessage />
            </FormItem>

            <Grid container spacing='1.5rem'>
              <Grid item xs={12} sm={6}>
                <FormItem>
                  <FormField
                    name="startingPoint"
                    control={methods.control}
                    render={({ field }) => (
                      <FormControl {...field} label="Starting Point" />
                    )}
                  />
                  <FormMessage />
                </FormItem>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormItem>
                  <FormField
                    name="destination"
                    control={methods.control}
                    render={({ field }) => (
                      <FormControl {...field} label="Destination" />
                    )}
                  />
                  <FormMessage />
                </FormItem>
              </Grid>
            </Grid>

            <Grid container spacing='1.5rem'>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <FormItem>
                    <Controller
                      name="startDate"
                      control={methods.control}
                      render={({ field }) => (
                        <DatePicker
                          {...field}
                          value={startDate}
                          onChange={(newValue) => {
                            setStartDate(newValue);
                            field.onChange(newValue?.toDate() || null);
                          }}
                          disablePast
                          label='Start Date'
                        />
                      )}
                    />
                    <FormMessage />
                  </FormItem>
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12} sm={6}>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <FormItem>

                    <Controller
                      name="endDate"
                      control={methods.control}
                      render={({ field }) => (
                        <DatePicker
                          {...field}
                          value={endDate}
                          onChange={(newValue) => {
                            setEndDate(newValue);
                            field.onChange(newValue?.toDate() || null);
                          }}
                          disablePast
                          label='End Date'
                        />
                      )}
                    />
                    <FormMessage />
                  </FormItem>
                </LocalizationProvider>
              </Grid>
            </Grid>

            <Grid container spacing='1.5rem'>
              <Grid item xs={12} sm={4}>
                <FormItem>
                  <FormField
                    name="budget"
                    control={methods.control}
                    render={({ field }) => (
                      <FormControl {...field} label="Budget for One Slot" />
                    )}
                  />
                  <FormMessage />
                </FormItem>
              </Grid>

              <Grid item xs={12} sm={4}>
                <FormItem>
                  <FormField
                    name="totalSlots"
                    control={methods.control}
                    render={({ field }) => (
                      <FormControl {...field} label="Total Slots" />
                    )}
                  />
                  <FormMessage />
                </FormItem>
              </Grid>

              <Grid item xs={12} sm={4}>
                <FormItem>
                  <FormField
                    name="activities"
                    control={methods.control}
                    render={({ field }) => (
                      <FormControl {...field} label="Activities" />
                    )}
                  />
                  <FormMessage />
                </FormItem>
              </Grid>
            </Grid>

            <FormItem>
              <FormField
                name="tripDetails"
                control={methods.control}
                render={({ field }) => (
                  <FormControl {...field} label="Trip Details" multiline rows={8} />
                )}
              />
              <FormMessage />
            </FormItem>

            <Grid container>
              <Grid item xs={2}>
                <Button
                  component="label"
                  role={undefined}
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                  sx={{
                    width: '100%',
                    height: '100%',
                    bgcolor: '#fff',
                    '&:hover': {
                      bgcolor: '#fff',
                    }
                  }}
                >
                  Upload Image
                  <VisuallyHiddenInput type="file" accept="image/*" onChange={handleImageChange} multiple />
                </Button>
              </Grid>

              <Grid item xs={10}
                minHeight='8rem'
                px='1rem'
                sx={{ border: '1px solid #afafaf', borderRadius: '.2rem' }}
              >
                <Stack gap={2}>
                  {images.map((image, index) => (
                    <Box key={index} minHeight='8rem'>
                      <div onClick={() => handleImageRemove(index)}><CloseIcon /></div>
                      <Image
                        alt={`Image ${index + 1}`}
                        src={URL.createObjectURL(image)}
                        width={100}
                        height={100}
                        className="max-h-24"
                      />
                    </Box>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Stack>

          <Button type="submit" variant="contained" color="primary" disabled={isTripDataLoading || isTripDataSuccess}>
            Submit
          </Button>
        </Box>
      </Form>
    </Box>
  );
}

export default AddTripPage;
