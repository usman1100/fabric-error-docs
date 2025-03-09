# How it works


## Format

A standard Fabric error code goes like this:

```
WEB-TMP-0912
```


This is a 12-character string, with the following format:

```
[TEAM]-[CATEGORY]-[ISSUE]
```

- `TEAM`: The team that owns the error. This could be DAT, WEB or INF
- `CATEGORY`: The category of the error. This includes a wide range of varieties, such as `TMP` for template data issues, `ALV`, for alarm level issues and so on
- `ISSUE`: This is a 4 digit number that uniquely identifies the specific issue. For example `0912` could mean that a particular template's name is too long.
