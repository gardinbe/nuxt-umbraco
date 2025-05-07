var builder = WebApplication.CreateBuilder(args);

builder.CreateUmbracoBuilder()
	.AddBackOffice()
	.AddWebsite()
	.AddDeliveryApi()
	.AddComposers()
	.Build();

var app = builder.Build();

await app.BootUmbracoAsync();

app.UseSwagger();

app.UseCors((p) =>
{
	p.WithOrigins("http://localhost:3000")
		.AllowAnyHeader();
});

app.UseUmbraco()
	.WithMiddleware((u) =>
	{
		u.UseBackOffice();
		u.UseWebsite();
	})
	.WithEndpoints((u) =>
	{
		u.UseInstallerEndpoints();
		u.UseBackOfficeEndpoints();
		u.UseWebsiteEndpoints();
	});

await app.RunAsync();
