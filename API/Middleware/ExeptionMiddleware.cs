using API.Errors;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;

namespace API.Middleware
{
    public class ExeptionMiddleware
    {

        private RequestDelegate RequestDelegate { get; }
        private ILogger<ExeptionMiddleware> Logger { get; }
        private IHostEnvironment Environment { get; }

        public ExeptionMiddleware(RequestDelegate requestDelegate, ILogger<ExeptionMiddleware> logger, IHostEnvironment environment)
        {
            RequestDelegate = requestDelegate;
            Logger = logger;
            Environment = environment;
        }

        public async Task InvokeAsync(HttpContext context) {

            try {
                
                await RequestDelegate(context);
            
            } catch (Exception exception) {

                Logger.LogError(exception, exception.Message);

                context.Response.ContentType = "application/json";
                context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

                var response = Environment.IsDevelopment() ?
                        new ApiError(context.Response.StatusCode, exception.Message, exception.StackTrace.ToString()) :
                        new ApiError(context.Response.StatusCode, "internal Server Error");
                
                var options = new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase };

                var json = JsonSerializer.Serialize(response, options);

                await context.Response.WriteAsync(json);

            }
        }
    }
}
