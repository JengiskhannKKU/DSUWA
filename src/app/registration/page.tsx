"use client";

import React, { useState, ChangeEvent, Component, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import * as Components from "@/features/registration/components";

import handleSelectEvents from "@/features/registration/utils/handleSelectEvents";

const Page = () => {
  const [isFreshmenButtonSelected, setIsFreshmenButtonSelected] =
    useState<boolean>(false);
  const [isCurrentStudentButtonSelected, setIsCurrentStudentButtonSelected] =
    useState<boolean>(false);
  const [isStaffButtonSelected, setIsStaffButtonSelected] =
    useState<boolean>(false);

  const [isDisableStudentCode, setIsDisableStudentCode] =
    useState<boolean>(false);

  const [validationMessage, setValidationMessage] = useState<string>("");

  const [std_code, setSTD_code] = useState<string>("");
  const [std_nickname, setSTD_nickname] = useState<string>("");
  const [std_first_name_th, setSTD_first_name_th] = useState<string>("");
  const [std_last_name_th, setSTD_last_name_th] = useState<string>("");
  const [std_first_name_eng, setSTD_first_name_eng] = useState<string>("");
  const [std_last_name_eng, setSTD_last_name_eng] = useState<string>("");
  const [std_faculty_name, setSTD_faculty_name] = useState<string>("");
  const [std_faculty_name_eng, setSTD_faculty_name_eng] = useState<string>("");

  const [std_religion, setSTD_religion] = useState<string>("");
  const [std_food_type, setSTD_food_type] = useState<string>("");
  const [std_food_allergy, setSTD_food_allergy] = useState<string[]>([]);
  const [std_drug_allergy, setSTD_drug_allergy] = useState<string[]>([]);
  const [std_underlying_disease, setSTD_underlying_disease] =
    useState<string[]>([]);
  const [std_telephone, setSTD_telephone] = useState<string>("");
  const [std_friend_telephone, setSTD_friend_telephone] = useState<string>("");
  const [std_facebook, setSTD_facebook] = useState<string>("");
  const [std_instagram, setSTD_instagram] = useState<string>("");
  const [std_role, setSTD_role] = useState<string>("");

  // Select events
  const [isFirstMeetEventSelected, setIsFirstMeetEventSelected] =
    useState<boolean>(false);
  const [isFriendshipEventSelected, setIsFriendshipEventSelected] =
    useState<boolean>(false);
  const [isPradabchorEventSelected, setIsPradabchorEventSelected] =
    useState<boolean>(false);

  // Get `uuid_student`
  //const [uuid_student, setUUID_student] = useState<string>("");

  // Generate registration `code`
  // const firstmeet_2024_code = uuidv4().split("-")[0];
  // const pradabchor_2024_code = uuidv4().split("-")[0];
  // const friendship_2024_code = uuidv4().split("-")[0];

  const [events, setEvents] = useState<string[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await handleSelectEvents();
      setEvents(events);
    };

    fetchEvents();
  }, []);

  return (
    <main>
      <Typography
        sx={{
          mt: 4,
          fontFamily: "Athiti",
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "medium",
        }}
      >
        ลงทะเบียนเข้าร่วมกิจกรรม
      </Typography>

      <Components.RoleSelector
        setIsFreshmenButtonSelected={setIsFreshmenButtonSelected}
        setIsCurrentStudentButtonSelected={setIsCurrentStudentButtonSelected}
        setIsStaffButtonSelected={setIsStaffButtonSelected}
      />

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {(isFreshmenButtonSelected ||
          isCurrentStudentButtonSelected ||
          isStaffButtonSelected) && (
          <Components.EventsSelector
            events={events}
            isEventSelected={[
              isPradabchorEventSelected,
              isFirstMeetEventSelected,
              isFriendshipEventSelected,
            ]}
            setIsEventSelected={[
              setIsPradabchorEventSelected,
              setIsFirstMeetEventSelected,
              setIsFriendshipEventSelected,
            ]}
            isCurrentStudentButtonSelected={isCurrentStudentButtonSelected}
            isFreshmenButtonSelected={isFreshmenButtonSelected}
            isStaffButtonSelected={isStaffButtonSelected}
          />
        )}

        {isStaffButtonSelected && (
          <Components.Staff
            std_first_name_th={std_first_name_th}
            setSTD_first_name_th={setSTD_first_name_th}
            std_last_name_th={std_last_name_th}
            setSTD_last_name_th={setSTD_last_name_th}
          />
        )}

        {isCurrentStudentButtonSelected ? (
          <Components.CurrentStudent
            std_code={std_code}
            setSTD_code={setSTD_code}
            std_first_name_th={std_first_name_th}
            setSTD_first_name_th={setSTD_first_name_th}
            std_last_name_th={std_last_name_th}
            setSTD_last_name_th={setSTD_last_name_th}
          />
        ) : (
          <></>
        )}

        {isFreshmenButtonSelected && (
          <Components.Freshmen
            std_code={std_code}
            setSTD_code={setSTD_code}
            std_nickname={std_nickname}
            setSTD_nickname={setSTD_nickname}
            std_first_name_th={std_first_name_th}
            setSTD_first_name_th={setSTD_first_name_th}
            std_last_name_th={std_last_name_th}
            setSTD_last_name_th={setSTD_last_name_th}
            std_faculty_name={std_faculty_name}
            setSTD_faculty_name={setSTD_faculty_name}
            std_religion={std_religion}
            setSTD_religion={setSTD_religion}
            std_food_type={std_food_type}
            setSTD_food_type={setSTD_food_type}
            std_food_allergy={std_food_allergy}
            setSTD_food_allergy={setSTD_food_allergy}
            std_drug_allergy={std_drug_allergy}
            setSTD_drug_allergy={setSTD_drug_allergy}
            std_underlying_disease={std_underlying_disease}
            setSTD_underlying_disease={setSTD_underlying_disease}
            std_telephone={std_telephone}
            setSTD_telephone={setSTD_telephone}
            std_friend_telephone={std_friend_telephone}
            setSTD_friend_telephone={setSTD_friend_telephone}
            std_facebook={std_facebook}
            setSTD_facebook={setSTD_facebook}
            std_instagram={std_instagram}
            setSTD_instagram={setSTD_instagram}
            isDisableStudentCode={isDisableStudentCode}
            setIsDisableStudentCode={setIsDisableStudentCode}
          />
        )}

        <Components.SubmitButton
          std_code={std_code}
          setSTD_code={setSTD_code}
          std_nickname={std_nickname}
          setSTD_nickname={setSTD_nickname}
          std_first_name_th={std_first_name_th}
          setSTD_first_name_th={setSTD_first_name_th}
          std_last_name_th={std_last_name_th}
          setSTD_last_name_th={setSTD_last_name_th}
          std_faculty_name={std_faculty_name}
          setSTD_faculty_name={setSTD_faculty_name}
          std_religion={std_religion}
          setSTD_religion={setSTD_religion}
          std_food_type={std_food_type}
          setSTD_food_type={setSTD_food_type}
          std_food_allergy={std_food_allergy}
          setSTD_food_allergy={setSTD_food_allergy}
          std_drug_allergy={std_drug_allergy}
          setSTD_drug_allergy={setSTD_drug_allergy}
          std_underlying_disease={std_underlying_disease}
          setSTD_underlying_disease={setSTD_underlying_disease}
          std_telephone={std_telephone}
          setSTD_telephone={setSTD_telephone}
          std_friend_telephone={std_friend_telephone}
          setSTD_friend_telephone={setSTD_friend_telephone}
          std_facebook={std_facebook}
          setSTD_facebook={setSTD_facebook}
          std_instagram={std_instagram}
          setSTD_instagram={setSTD_instagram}
          isFreshmenButtonSelected={isFreshmenButtonSelected}
          isCurrentStudentButtonSelected={isCurrentStudentButtonSelected}
          isStaffButtonSelected={isStaffButtonSelected}
          isFirstMeetEventSelected={isFirstMeetEventSelected}
          isFriendshipEventSelected={isFriendshipEventSelected}
          isPradabchorEventSelected={isPradabchorEventSelected}
          isDisableStudentCode={isDisableStudentCode}
        />

        <button
          onClick={() => {
            console.log("foods allergy: ", std_food_allergy);
            console.log("drugs allergy:", std_drug_allergy);
            console.log("underlying disease:", std_underlying_disease);
            console.log("food type:", std_food_type);
            console.log(isPradabchorEventSelected, isFirstMeetEventSelected, isFriendshipEventSelected);
            console.log(isFreshmenButtonSelected, isCurrentStudentButtonSelected);
          }}
        >
          check
        </button>
      </Container>
    </main>
  );
};

export default Page;

import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Alert,
  AlertTitle,
  AppBar,
  Autocomplete,
  Avatar,
  AvatarGroup,
  Backdrop,
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Breadcrumbs,
  Button,
  ButtonBase,
  ButtonGroup,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Chip,
  CircularProgress,
  ClickAwayListener,
  Collapse,
  Container,
  CssBaseline,
  darkScrollbar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Drawer,
  Fab,
  Fade,
  FilledInput,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  Unstable_Grid2,
  Grow,
  Hidden,
  Icon,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Input,
  InputAdornment,
  InputBase,
  InputLabel,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  Menu,
  MenuItem,
  MenuList,
  MobileStepper,
  Modal,
  NativeSelect,
  NoSsr,
  OutlinedInput,
  Pagination,
  PaginationItem,
  Paper,
  Popover,
  Popper,
  Portal,
  Radio,
  RadioGroup,
  Rating,
  ScopedCssBaseline,
  Select,
  Skeleton,
  Slide,
  Slider,
  Snackbar,
  SnackbarContent,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Stack,
  Step,
  StepButton,
  StepConnector,
  StepContent,
  StepIcon,
  StepLabel,
  Stepper,
  SvgIcon,
  SwipeableDrawer,
  Switch,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Tabs,
  TabScrollButton,
  TextField,
  TextareaAutosize,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  Zoom,
  useAutocomplete,
  GlobalStyles,
  generateUtilityClass,
  generateUtilityClasses,
  Unstable_TrapFocus,
  SelectChangeEvent,
} from "@mui/material";
