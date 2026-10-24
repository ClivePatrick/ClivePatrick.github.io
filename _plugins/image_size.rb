require "fastimage"

# Liquid filter returning [width, height] of a site image, read at build time.
#   {% assign size = "/assets/images/logo.png" | image_size %}
module ImageSizeFilter
  def image_size(path)
    site = @context.registers[:site]
    file = File.join(site.source, path.to_s)
    size = FastImage.size(file)
    Jekyll.logger.warn "image_size:", "could not read #{path}" unless size
    size
  end
end

Liquid::Template.register_filter(ImageSizeFilter)
