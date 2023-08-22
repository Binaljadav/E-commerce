<?php

namespace App\Util;

use Carbon\Carbon;
use Cache;

class MGHelper
{
    static function dateRangeToArrayInCarbonFormat($dateRangeValues)
    {
        // Date Range Value Format : mm/dd/YYYY - mm/dd/YYYY

        $explodedDateRangeValues = explode('-', $dateRangeValues);

        $dateArray = [];

        $explodedDate1 = explode('/', $explodedDateRangeValues[0]);
        $explodedDate2 = explode('/', $explodedDateRangeValues[1]);

        $dateArray[0] = Carbon::parse(trim($explodedDate1[2]) . '-' . trim($explodedDate1[0]) . '-' . trim($explodedDate1[1]));
        $dateArray[1] = Carbon::parse(trim($explodedDate2[2]) . '-' . trim($explodedDate2[0]) . '-' . trim($explodedDate2[1]) . ' 23:59:59');

        return $dateArray;
    }

    static function filterDateRangeToArrayInCarbonFormat($dateRangeValues)
    {
        // Date Range Value Format : dd/mm/YYYY - dd/mm/YYYY

        $explodedDateRangeValues = explode('-', $dateRangeValues);

        $dateArray = [];

        $explodedDate1 = explode('/', $explodedDateRangeValues[0]);
        $explodedDate2 = explode('/', $explodedDateRangeValues[1]);

        $dateArray[0] = Carbon::parse(trim($explodedDate1[2]) . '-' . trim($explodedDate1[1]) . '-' . trim($explodedDate1[0]));
        $dateArray[1] = Carbon::parse(trim($explodedDate2[2]) . '-' . trim($explodedDate2[1]) . '-' . trim($explodedDate2[0]) . ' 23:59:59');

        return $dateArray;
    }

    static function getDateFormat($value)
    {
        // return \Carbon\Carbon::parse($value)->format('d/m/Y h:i:s');
        if (!empty($value)) {
            return \Carbon\Carbon::parse($value)->format('d-m-Y');
        }
        return null;
    }

    static function currentFinancialYearStartDate()
    {
        if (date('m') <= 3) {
            //Upto March
            return date('Y') - 1 . '-04-01';
            // $financial_year = (date('Y')-1) . '-' . date('Y');
        }
        //After March
        else {
            return date('Y') . '-04-01';
            // $financial_year = date('Y') . '-' . (date('Y') + 1);
        }
    }
    
    static function currentFinancialYearEndDate()
    {
        if (date('m') <= 3) {
            //Upto March
            return date('Y') . '-03-31';
            // $financial_year = (date('Y')-1) . '-' . date('Y');
        }
        //After March
        else {
            return date('Y') + 1 . '-03-31';
            // $financial_year = date('Y') . '-' . (date('Y') + 1);
        }
    }

    static function getFinancialYearByDate($date)
    {
        $dateValue = strtotime($date);
        $fourDigitYear = date('Y', $dateValue);
        $twoDigitYear = date('y', $dateValue);
        $monthNo = date('m', $dateValue);

        if ($monthNo <= 3) {
            //Upto March
            return $fourDigitYear - 1 . '-' . $twoDigitYear;
        }
        //After March
        else {
            return $fourDigitYear . '-' . ($twoDigitYear + 1);
        }
    }

    static function getCurrentFinancialYear()
    {
        $fourDigitYear = date('Y');
        $twoDigitYear = date('y');
        if (date('m') <= 3) {
            return $fourDigitYear - 1 . '-' . $twoDigitYear;
        } else {
            return $fourDigitYear . '-' . ($twoDigitYear + 1);
        }
    }

    static function getDateAfterSomeMonth($date, $month)
    {
        $newDate = $effectiveDate = date('Y-m-d', strtotime('+' . $month . 'months', strtotime($date)));

        return $newDate;
    }

    static function getDateBeforeSomeMonth($date, $month)
    {
        $newDate = $effectiveDate = date('Y-m-d', strtotime('-' . $month . 'months', strtotime($date)));

        return $newDate;
    }
    static function compareTwoDate($date1, $date2)
    {
        if (!empty($date1)) {
            if ($date1 < $date2) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    static function dateDiffInDays($date1, $date2) 
    {
      // Calculating the difference in timestamps
      $diff = strtotime($date2) - strtotime($date1);
  
      // 1 day = 24 hours
      // 24 * 60 * 60 = 86400 seconds
      return abs(round($diff / 86400));
    }

    static function isOnline($user)
    {
        return Cache::has('user-is-online-' . $user);
    }
}