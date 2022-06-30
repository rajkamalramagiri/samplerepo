/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

const filter = createFilterOptions<FilmOptionType>();

export default function FreeSoloCreateOption() {
    const [value, setValue] = React.useState<FilmOptionType | null>(null);
    const [top100Films, setop100Films] = React.useState<FilmOptionType[] | null>([
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 }]);

    console.log('value', value)
    console.log('top100Films',top100Films)

  return (
    <Autocomplete
      value={value}
          onChange={(event, newValue) => {
          console.log('newValue',newValue)
          if (typeof newValue === 'string') {
              console.log('exdcuting')
            
          setValue({
            title: newValue,
          });
            
            
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            title: newValue.inputValue,
          });
          setop100Films([...top100Films,{title: newValue.inputValue}])
              
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        // Suggest the creation of a new value
          if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            title: <b style={{color:'red'}}>+ Add {params.inputValue }</b>,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={top100Films}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.title;
      }}
          renderOption={(option) => <span > {option.title }</span>}
      style={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Free solo with text demo" variant="outlined" />
      )}
    />
  );
}

interface FilmOptionType {
  inputValue?: string;
  title: string | any;
  year?: number;
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

