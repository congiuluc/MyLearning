# Dev Proxy

Short URL: [https://aka.ms/devproxy](https://aka.ms/devproxy)

Main Repo: [https://github.com/microsoft/dev-proxy](https://github.com/microsoft/dev-proxy)

## What is Dev Proxy

Dev Proxy is an API simulator designed to help developers test their apps beyond standard successful scenarios, particularly focusing on how apps handle API failures.

This tool allows developers to simulate API errors, rate limits, and slow responses without altering their app's code.

It provides several benefits:

- **Error Simulation**: Test app responses to API failures to build more robust applications that protect customer data.
- **Rate Limit Testing**: Verify app behavior under API rate limits to avoid throttling and enhance user experience.
- **Slow API Handling**: Assess app performance with slow APIs to implement improvements for user-friendliness.
- **Mock API Creation**: Quickly set up mock APIs without writing code, allowing developers to focus on core app development.
- **Contextual Guidance**: Receive insights on API usage to further enhance the app.

Dev Proxy is a command-line tool that works across all platforms and tech stacks by intercepting network requests. It is open-source and free to use.

## Get Started

Install Dev Proxy:

[Windows](#tab/windows)

```Console
winget install Microsoft.DevProxy --silent
```

[Linux](#tab/Linux)

```Console
bash -c "$(curl -sL https://aka.ms/devproxy/setup.sh)"
```

[Mac](#tab/Mac)

```Console
brew tap microsoft/dev-proxy
brew install dev-proxy
```

> IMPORTANT
> Before first execution you need to trust Dev Proxy certificate for https requests
> Follow these steps:
>
> 1. Open a command prompt and enter `devproxy`, then press `[Enter]`.
> 2. When prompted about the Dev Proxy CA certificate, press `y` to trust it.
> 3. Allow incoming connections when prompted by selecting `Allow`.

### Test

```powershell
Invoke-WebRequest -Uri https://jsonplaceholder.typicode.com/posts
Invoke-WebRequest -Uri https://jsonplaceholder.typicode.com/posts/1
Invoke-WebRequest -Uri https://jsonplaceholder.typicode.com/posts/1/comments
```

## Links:
